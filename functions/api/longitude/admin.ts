// Longitude (2026-11-05). The store's side of the reservations, for /longitude/tienda/.
// Every request carries the store key (header X-Admin-Key = the ADMIN_KEY secret).
// GET  → reservations and closed times from yesterday to DAYS_AHEAD
// POST { action: "cancel", id }          cancel a reservation, or reopen a closed time
// POST { action: "block", day, slot }    close one time by hand
// POST { action: "closeDay", day }       close a whole day
import { DAYS_AHEAD, LAST_START, LENGTH, OPEN, addDays, hm, isIsoDay, nowMerida, toMin } from "../../../src/lib/longitude-rules";
import { json, newCode, sameOrigin, sameSecret, type Ctx } from "../../../src/lib/longitude-server";

const authorized = ({ request, env }: Ctx) => !!env.ADMIN_KEY && sameSecret(request.headers.get("X-Admin-Key") ?? "", env.ADMIN_KEY);

export async function onRequestGet(ctx: Ctx) {
  if (!authorized(ctx)) return json(401, { error: "unauthorized" });
  const today = nowMerida().date;
  const { results } = await ctx.env.DB.prepare(
    `SELECT id, code, day, start, kind, status, name, phone, dest, items, total, notes, created_at
     FROM reservations WHERE day BETWEEN ?1 AND ?2 ORDER BY day, start, id`,
  ).bind(addDays(today, -1), addDays(today, DAYS_AHEAD)).all<Record<string, unknown> & { start: number; items: string | null }>();
  return json(200, {
    today,
    reservations: results.map((r) => ({ ...r, time: hm(r.start), items: r.items ? JSON.parse(r.items) : [] })),
  });
}

export async function onRequestPost(ctx: Ctx) {
  if (!sameOrigin(ctx.request)) return json(403, { error: "forbidden" });
  if (!authorized(ctx)) return json(401, { error: "unauthorized" });
  const b = (await ctx.request.json().catch(() => null)) as { action?: string; id?: number; day?: string; slot?: string } | null;
  const db = ctx.env.DB;
  const block = (day: string, start: number) =>
    db.prepare(`INSERT INTO reservations (code, day, start, kind) VALUES (?1, ?2, ?3, 'block')`).bind(newCode(), day, start);

  if (b?.action === "cancel" && Number.isInteger(b.id)) {
    await db.prepare(`UPDATE reservations SET status = 'cancelled', updated_at = datetime('now') WHERE id = ?1`).bind(b.id).run();
    return json(200, { ok: true });
  }
  if (b?.action === "block" && isIsoDay(b.day ?? "") && /^\d{1,2}:\d{2}$/.test(b.slot ?? "")) {
    await block(b.day!, toMin(b.slot!)).run();
    return json(200, { ok: true });
  }
  if (b?.action === "closeDay" && isIsoDay(b.day ?? "")) {
    // a closed time also covers the half hours around it, so one per hour closes the day
    const starts: number[] = [];
    for (let m = OPEN; m <= LAST_START; m += LENGTH) starts.push(m);
    await db.batch(starts.map((m) => block(b.day!, m)));
    return json(200, { ok: true });
  }
  return json(400, { error: "invalid" });
}
