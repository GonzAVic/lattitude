// Helpers for the Longitude reservations API (Cloudflare Pages Functions in functions/api/longitude).
// Server-only: never imported by a page.

export type D1Result<T = unknown> = { results: T[]; meta: { changes: number; last_row_id: number } };
export type D1Statement = {
  bind(...values: unknown[]): D1Statement;
  first<T = Record<string, unknown>>(): Promise<T | null>;
  all<T = Record<string, unknown>>(): Promise<D1Result<T>>;
  run(): Promise<D1Result>;
};
export type D1Database = { prepare(sql: string): D1Statement; batch(statements: D1Statement[]): Promise<D1Result[]> };
export type Env = { DB: D1Database; ADMIN_KEY?: string };
export type Ctx = { request: Request; env: Env };

export const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });

/** Only our own pages may write. */
export function sameOrigin(request: Request) {
  const origin = request.headers.get("Origin");
  return !origin || origin === new URL(request.url).origin;
}

/** Short code for the customer, without look-alike characters (0/O, 1/I). */
export function newCode() {
  const abc = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = crypto.getRandomValues(new Uint8Array(5));
  return [...bytes].map((b) => abc[b % abc.length]).join("");
}

/** Constant-time comparison for the store key. */
export function sameSecret(a: string, b: string) {
  if (!a || !b || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** 10-digit Mexican number, with or without +52 / spaces. */
export function normalizePhone(raw: unknown) {
  const digits = String(raw ?? "").replace(/\D/g, "");
  const ten = digits.length === 12 && digits.startsWith("52") ? digits.slice(2) : digits;
  return /^\d{10}$/.test(ten) ? ten : null;
}
