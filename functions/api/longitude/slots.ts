// Longitude (2026-11-05). GET /api/longitude/slots?token=… → the delivery times already taken,
// from today to DAYS_AHEAD, as { taken: { "2026-11-09": ["10:00", "13:30"] } }. The order page
// hides every time that would overlap them. The asking browser's own reservation is left out,
// so its chosen time still shows as available to it.
import { DAYS_AHEAD, addDays, hm, nowMerida } from "../../../src/lib/longitude-rules";
import { json, type Ctx } from "../../../src/lib/longitude-server";

export async function onRequestGet({ request, env }: Ctx) {
  const token = new URL(request.url).searchParams.get("token") ?? "";
  const today = nowMerida().date;
  const { results } = await env.DB.prepare(
    `SELECT day, start FROM reservations
     WHERE status = 'active' AND day BETWEEN ?1 AND ?2 AND (token IS NULL OR token != ?3)
     ORDER BY day, start`,
  ).bind(today, addDays(today, DAYS_AHEAD), token).all<{ day: string; start: number }>();
  const taken: Record<string, string[]> = {};
  for (const r of results) (taken[r.day] ??= []).push(hm(r.start));
  return json(200, { taken });
}
