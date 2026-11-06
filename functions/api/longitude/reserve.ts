// Longitude (2026-11-05). POST /api/longitude/reserve takes a delivery time for an order, so no
// two customers can get the same one (overlapping times count: a delivery lasts an hour).
// The browser keeps a random token per order: sending again with the same token updates that
// reservation (new time, new items) instead of taking a second one. DELETE frees it.
//
// 200 { ok, code }        reserved (code goes in the WhatsApp message)
// 409 { error: "taken" }  someone else got that time first
// 429 { error: "phone_limit" | "rate" }
// 400 { error: "invalid", field }
import { CAPACITY, LENGTH, MAX_ACTIVE_PER_PHONE, MIN_DRINKS, isIsoDay, nowMerida, openStarts, toMin } from "../../../src/lib/longitude-rules";
import { json, newCode, normalizePhone, sameOrigin, type Ctx } from "../../../src/lib/longitude-server";

type Item = { id: string; name: string; n: number; price: number; drink: boolean };

const text = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const validToken = (v: unknown): v is string => typeof v === "string" && /^[a-f0-9]{24,64}$/.test(v);

// Room left at that time, not counting this order's own reservation. In SQL so the check and the
// write happen in one statement: two requests at once can't both get the last spot.
const ROOM = `(SELECT COUNT(*) FROM reservations
  WHERE day = ?1 AND status = 'active' AND ABS(start - ?2) < ${LENGTH} AND (token IS NULL OR token != ?3)) < ${CAPACITY}`;

export async function onRequestPost({ request, env }: Ctx) {
  if (!sameOrigin(request)) return json(403, { error: "forbidden" });
  const b = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!b) return json(400, { error: "invalid", field: "body" });

  const token = b.token;
  if (!validToken(token)) return json(400, { error: "invalid", field: "token" });
  const day = text(b.day, 10);
  const slot = text(b.slot, 5);
  const now = nowMerida();
  const start = /^\d{1,2}:\d{2}$/.test(slot) ? toMin(slot) : -1;
  if (!isIsoDay(day) || !openStarts(day, now).includes(start)) return json(400, { error: "invalid", field: "time" });
  const name = text(b.name, 40);
  if (!name) return json(400, { error: "invalid", field: "name" });
  const phone = normalizePhone(b.phone);
  if (!phone) return json(400, { error: "invalid", field: "phone" });
  const dest = text(b.dest, 60);
  if (!dest) return json(400, { error: "invalid", field: "dest" });
  const notes = text(b.notes, 200);
  const items: Item[] = (Array.isArray(b.items) ? b.items : []).slice(0, 40).map((i: any) => ({
    id: text(i?.id, 40), name: text(i?.name, 60), n: Math.max(0, Math.min(20, Math.floor(Number(i?.n) || 0))),
    price: Math.max(0, Math.min(5000, Math.floor(Number(i?.price) || 0))), drink: i?.drink === true,
  })).filter((i) => i.id && i.n > 0);
  if (items.filter((i) => i.drink).reduce((a, i) => a + i.n, 0) < MIN_DRINKS) return json(400, { error: "invalid", field: "items" });
  const total = items.reduce((a, i) => a + i.n * i.price, 0);
  const ip = request.headers.get("CF-Connecting-IP") ?? "";

  // Abuse limits: upcoming reservations per phone, and new reservations per connection per hour.
  const perPhone = await env.DB.prepare(
    `SELECT COUNT(*) AS n FROM reservations WHERE phone = ?1 AND status = 'active' AND kind = 'order' AND day >= ?2 AND token != ?3`,
  ).bind(phone, now.date, token).first<{ n: number }>();
  if ((perPhone?.n ?? 0) >= MAX_ACTIVE_PER_PHONE) return json(429, { error: "phone_limit" });

  const existing = await env.DB.prepare(`SELECT id, code FROM reservations WHERE token = ?1 AND status = 'active'`)
    .bind(token).first<{ id: number; code: string }>();

  if (existing) {
    const r = await env.DB.prepare(
      `UPDATE reservations SET day = ?1, start = ?2, name = ?4, phone = ?5, dest = ?6, items = ?7, total = ?8, notes = ?9, updated_at = datetime('now')
       WHERE id = ?10 AND ${ROOM}`,
    ).bind(day, start, token, name, phone, dest, JSON.stringify(items), total, notes, existing.id).run();
    return r.meta.changes ? json(200, { ok: true, code: existing.code }) : json(409, { error: "taken" });
  }

  if (ip) {
    const recent = await env.DB.prepare(
      `SELECT COUNT(*) AS n FROM reservations WHERE ip = ?1 AND created_at > datetime('now', '-1 hour')`,
    ).bind(ip).first<{ n: number }>();
    if ((recent?.n ?? 0) >= 6) return json(429, { error: "rate" });
  }

  for (let attempt = 0; attempt < 3; attempt++) {
    const code = newCode();
    try {
      const r = await env.DB.prepare(
        `INSERT INTO reservations (code, token, day, start, kind, name, phone, dest, items, total, notes, ip)
         SELECT ?4, ?3, ?1, ?2, 'order', ?5, ?6, ?7, ?8, ?9, ?10, ?11 WHERE ${ROOM}`,
      ).bind(day, start, token, code, name, phone, dest, JSON.stringify(items), total, notes, ip).run();
      return r.meta.changes ? json(200, { ok: true, code }) : json(409, { error: "taken" });
    } catch (e) {
      if (!String(e).includes("UNIQUE")) throw e; // a code collision: try another one
    }
  }
  return json(500, { error: "code" });
}

/** The customer emptied the order: free its time. */
export async function onRequestDelete({ request, env }: Ctx) {
  if (!sameOrigin(request)) return json(403, { error: "forbidden" });
  const b = (await request.json().catch(() => null)) as { token?: unknown } | null;
  if (!validToken(b?.token)) return json(400, { error: "invalid", field: "token" });
  await env.DB.prepare(`UPDATE reservations SET status = 'cancelled', updated_at = datetime('now') WHERE token = ?1 AND status = 'active'`)
    .bind(b!.token).run();
  return json(200, { ok: true });
}
