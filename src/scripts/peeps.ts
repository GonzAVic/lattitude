// Open Peeps avatars (Pablo Stanley, CC0 1.0) rendered with DiceBear.
// One avatar state drives three outputs: the bust (preview + loyalty card),
// a head-only crop (option thumbnails) and the head mounted on full-body poses.
import { createAvatar } from "@dicebear/core";
import * as openPeeps from "@dicebear/open-peeps";

export type PeepPart = "head" | "face" | "facialHair" | "accessories";
export type PeepState = Record<"head" | "face", string> & Record<"facialHair" | "accessories", string | null>;

const schema = (openPeeps.schema as any).properties;
export const PARTS: PeepPart[] = ["head", "face", "facialHair", "accessories"];
export const OPTIONS: Record<PeepPart, (string | null)[]> = {
  head: schema.head.items.enum,
  face: schema.face.items.enum,
  facialHair: [null, ...schema.facialHair.items.enum],
  accessories: [null, ...schema.accessories.items.enum],
};

// Black ink on white, like the original Open Peeps — matches the poses and the brand.
const BASE = {
  skinColor: ["ffffff"],
  clothingColor: ["ffffff"],
  headContrastColor: ["0a0a0a"],
  maskProbability: 0,
};

export function stateFromSeed(seed: string): PeepState {
  const x = createAvatar(openPeeps, { seed, ...BASE }).toJson().extra as Record<string, string | undefined>;
  return {
    head: x.head!,
    face: x.face!,
    facialHair: x.facialHair ?? null,
    accessories: x.accessories ?? null,
  };
}

function render(s: PeepState): string {
  return createAvatar(openPeeps, {
    ...BASE,
    head: [s.head],
    face: [s.face],
    ...(s.facialHair ? { facialHair: [s.facialHair], facialHairProbability: 100 } : { facialHairProbability: 0 }),
    ...(s.accessories ? { accessories: [s.accessories], accessoriesProbability: 100 } : { accessoriesProbability: 0 }),
  } as any).toString();
}

const inner = (svg: string) =>
  svg
    .replace(/^<svg[^>]*>/, "")
    .replace(/<\/svg>\s*$/, "")
    .replace(/<metadata[\s\S]*?<\/metadata>/, "");

/** Head, face, facial hair and accessories, without the bust's shoulders (704×704 space). */
export function headInner(s: PeepState): string {
  const svg = inner(render(s));
  const start = svg.indexOf('<g fill-rule="evenodd" clip-rule="evenodd">');
  if (start < 0) return svg;
  const end = svg.indexOf("</g>", start) + 4;
  return svg.slice(0, start) + svg.slice(end);
}

/** Head and shoulders, as a full SVG. */
export function bustSvg(s: PeepState): string {
  return render(s).replace("<svg ", '<svg aria-hidden="true" ');
}

/** Head-only crop, used for the option thumbnails. */
export function headThumb(s: PeepState): string {
  return `<svg viewBox="100 0 580 600" aria-hidden="true">${headInner(s)}</svg>`;
}

// Full-body poses (src/assets/peeps/) — not on the page right now, kept for later tests.
// Full-body poses are headless in Open Peeps. Neck centres (x at the top edge) were
// measured from each pose SVG; the bust's neck sits at (410, 520) in DiceBear's space,
// and both drawings share the same scale, so the head mounts with a plain translate.
export const HEAD_UP = 520;
export const POSES = {
  pointing: { cx: 746, w: 1645, h: 2500 },
  walking: { cx: 741, w: 1645, h: 2500 },
  sitting: { cx: 634, w: 1534, h: 1856 },
} as const;
export type PoseName = keyof typeof POSES;

export function headTransform(pose: PoseName): string {
  const NECK_X = 410, NECK_Y = 520, OVERLAP = 30;
  return `translate(${POSES[pose].cx - NECK_X} ${HEAD_UP - NECK_Y + OVERLAP})`;
}
