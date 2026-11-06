// Longitude delivery rules (2026-11-05). One source for the order page (LongitudeOrder.astro)
// and the reservations API (functions/api/longitude/*), so they can never disagree.
// All times are Mérida time, whatever the phone or the server says.

export const TZ = "America/Merida";
export const OPEN = 10 * 60;            // first start: 10:00
export const LAST_START = 16 * 60;      // last start: 16:00
export const STEP = 30;                 // a start every 30 min
export const LENGTH = 60;               // a delivery takes an hour: bookings closer than this overlap
export const LEAD = 60;                 // book at least 1 hour ahead
export const SERVICE_DAYS = [1, 2, 3, 4, 5, 6]; // Monday to Saturday (0 = Sunday)
export const DAYS_AHEAD = 10;           // bookable from today to 10 days ahead
export const MIN_DRINKS = 5;            // food doesn't count
export const CAPACITY = 1;              // deliveries at the same time
export const MAX_ACTIVE_PER_PHONE = 2;  // upcoming reservations per phone number

export const STARTS = Array.from({ length: (LAST_START - OPEN) / STEP + 1 }, (_, i) => OPEN + i * STEP);

export type Now = { date: string; min: number };

export function nowMerida(at = new Date()): Now {
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })
    .formatToParts(at).map((x) => [x.type, x.value]));
  return { date: `${p.year}-${p.month}-${p.day}`, min: Number(p.hour) * 60 + Number(p.minute) };
}

export const addDays = (iso: string, n: number) => { const d = new Date(`${iso}T12:00:00Z`); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };
export const weekday = (iso: string) => new Date(`${iso}T12:00:00Z`).getUTCDay();
export const hm = (m: number) => `${Math.floor(m / 60)}:${String(m % 60).padStart(2, "0")}`;
export const toMin = (t: string) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
export const isIsoDay = (s: string) => /^\d{4}-\d{2}-\d{2}$/.test(s);

/** Starts the rules allow on a day, before looking at bookings. */
export function openStarts(iso: string, now: Now = nowMerida()): number[] {
  if (iso < now.date || iso > addDays(now.date, DAYS_AHEAD) || !SERVICE_DAYS.includes(weekday(iso))) return [];
  return STARTS.filter((m) => iso > now.date || m >= now.min + LEAD);
}

/** Can one more delivery start at `start`, given the starts already booked that day? */
export function hasRoom(start: number, booked: number[]): boolean {
  return booked.filter((b) => Math.abs(b - start) < LENGTH).length < CAPACITY;
}
