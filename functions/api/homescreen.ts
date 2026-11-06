// Add-to-home-screen invitation (2026-11-05). Cloudflare Pages Function at /api/homescreen.
// Remembers "dismissed" or "added" in a cookie set by the server, so iOS Safari doesn't wipe
// it after 7 days (as it does localStorage) and the invitation stays gone. See Loyalty.astro.

const COOKIE = "lt_a2hs";
const MAX_AGE = 400 * 24 * 60 * 60;
const VALUES = ["dismissed", "added"];

type Ctx = { request: Request };

export async function onRequestPost({ request }: Ctx) {
  const origin = request.headers.get("Origin");
  if (origin && origin !== new URL(request.url).origin) return new Response(null, { status: 403 });
  const body = (await request.json().catch(() => null)) as { state?: unknown } | null;
  const state = typeof body?.state === "string" && VALUES.includes(body.state) ? body.state : null;
  if (!state) return new Response(null, { status: 400 });
  const secure = new URL(request.url).protocol === "https:";
  return new Response(null, {
    status: 204,
    headers: {
      "Cache-Control": "no-store",
      "Set-Cookie": `${COOKIE}=${state}; Max-Age=${MAX_AGE}; Path=/; SameSite=Lax${secure ? "; Secure" : ""}`,
    },
  });
}
