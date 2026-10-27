// Mixpanel (2026-10-23). One module for the whole site: init, super properties, declarative
// click tracking and the loyalty member's identity. Mexico-only audience: no consent gate.
//
// Click tracking: any element with data-track="event_name" sends that event on click, with
// every data-track-<prop> attribute as a property (data-track-source="hero" → { source: "hero" }).
//
// Identity: anonymous until a loyalty card is shown; then identify(member code) — never the
// email or phone. reset() when the member signs out.
// Core build: everything we use, without the session-recording bundle (rrweb, ~90 KB gzip).
import mixpanel from "mixpanel-browser/src/loaders/loader-module-core";

const TOKEN = "312adff0ef575cb361ea6965317a19d3";
const isDev = import.meta.env.DEV;

let ready = false;

export function initAnalytics() {
  if (ready) return;
  const root = document.documentElement;
  mixpanel.init(TOKEN, {
    debug: isDev,
    track_pageview: false, // sent below, once the super properties are registered
    persistence: "localStorage",
    // Send each event right away: nothing waits in a queue that reset() (sign-out) would drop.
    batch_requests: false,
  });
  mixpanel.register({
    platform: "web",
    environment: isDev ? "development" : "production",
    lang: root.lang || "es",
    page_type: root.dataset.pageType || "other",
  });
  ready = true;
  mixpanel.track_pageview();

  document.addEventListener("click", (e) => {
    const el = (e.target as Element | null)?.closest<HTMLElement>("[data-track]");
    if (!el) return;
    const props: Record<string, string> = {};
    for (const [key, value] of Object.entries(el.dataset)) {
      // dataset turns data-track-source into "trackSource"
      if (key.startsWith("track") && key !== "track" && value !== undefined) {
        const name = key.slice(5).replace(/[A-Z]/g, (c) => "_" + c.toLowerCase()).replace(/^_/, "");
        props[name] = value;
      }
    }
    // sendBeacon so the event survives a click that leaves the page (e.g. the language switch)
    track(el.dataset.track!, props, { transport: "sendBeacon" });
  }, { capture: true });
}

export function track(event: string, props: Record<string, unknown> = {}, options?: { transport?: "xhr" | "sendBeacon"; send_immediately?: boolean }) {
  if (!ready) initAnalytics();
  mixpanel.track(event, props, options);
}

type Member = { code: string; name: string; stamps: number; stampsRequired: number; level?: { name: string; card: number } | null };

/** The loyalty member's card is on screen: tie this browser to them and update their profile. */
export function identifyMember(card: Member) {
  if (!ready) initAnalytics();
  if (!card.code) return;
  if (mixpanel.get_distinct_id() !== card.code) mixpanel.identify(card.code);
  mixpanel.register({ is_member: true });
  mixpanel.people.set({
    $name: card.name.split(" ")[0] ?? card.name, // first name only
    stamps: card.stamps,
    stamps_required: card.stampsRequired,
    level: card.level?.name ?? null,
    card_number: card.level?.card ?? null,
  });
}

/** Sign-out: forget the member on this browser. */
export function resetMember() {
  if (!ready) return;
  mixpanel.reset();
}
