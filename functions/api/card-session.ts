// Loyalty card session (2026-11-05). Cloudflare Pages Function at /api/card-session.
// The card token used to live only in localStorage, which iOS Safari wipes after 7 days
// without a visit, so members had to type their email again. A cookie set by the server
// (not by document.cookie) is not under that limit, so it is the durable copy; the page
// copies it back into localStorage on load (see Loyalty.astro).
// POST { token } saves it for 400 days (the browser maximum); DELETE clears it.

const COOKIE = "lt_card";
const MAX_AGE = 400 * 24 * 60 * 60;

type Ctx = { request: Request };

function cookie(value: string, maxAge: number, secure: boolean) {
  return `${COOKIE}=${value}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure ? "; Secure" : ""}`;
}

// Only our own pages may set or clear the cookie.
function sameOrigin(request: Request) {
  const origin = request.headers.get("Origin");
  return !origin || origin === new URL(request.url).origin;
}

const reply = (status: number, setCookie?: string) =>
  new Response(null, { status, headers: { "Cache-Control": "no-store", ...(setCookie ? { "Set-Cookie": setCookie } : {}) } });

export async function onRequestPost({ request }: Ctx) {
  if (!sameOrigin(request)) return reply(403);
  const body = (await request.json().catch(() => null)) as { token?: unknown } | null;
  const token = typeof body?.token === "string" ? body.token : "";
  if (!token || token.length > 1024 || /[\u0000-\u001f\u007f]/.test(token)) return reply(400);
  const secure = new URL(request.url).protocol === "https:";
  return reply(204, cookie(encodeURIComponent(token), MAX_AGE, secure));
}

export async function onRequestDelete({ request }: Ctx) {
  if (!sameOrigin(request)) return reply(403);
  const secure = new URL(request.url).protocol === "https:";
  return reply(204, cookie("", 0, secure));
}
