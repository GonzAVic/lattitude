// Timbres del Pasaporte del menú (2026-10-27): same drawing as the artifact proposal
// (perforated hueso paper, black line art, one accent per drink), exported for Lomu:
// 750×900 PNG (5:6), transparent around the perforation. Writes svg/ (self-contained, Inter
// embedded) and png/ (rendered by Chromium; sharp on macOS can't use a font that isn't installed).
//
//   INTER_TTF=<Inter ExtraBold .ttf> PLAYWRIGHT=<path to the playwright package> \
//     node design-assets/timbres-bebidas/generate.mjs
import sharp from "sharp";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, "png");
const SVG_OUT = join(HERE, "svg");
const FONT = process.env.INTER_TTF
  ? `<style>@font-face{font-family:Inter;font-weight:800;src:url(data:font/ttf;base64,${readFileSync(process.env.INTER_TTF).toString("base64")})}</style>`
  : "";
const INK = "#0a0a0a", PAPER = "#f7f5f0";
const MONO = "Menlo,ui-monospace,monospace";
const SANS = "Inter,Arial,sans-serif";
const S = (w = 1.8) => `fill="none" stroke="${INK}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`;
const SF = (w = 1.8) => `stroke="${INK}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`; // stroke, keep fill

// A tapered glass: left/right edges at top (yt) and bottom (yb). band() fills a slice of it.
function glass(tl, tr, bl, br, yt, yb) {
  const L = (y) => tl + ((bl - tl) * (y - yt)) / (yb - yt);
  const R = (y) => tr + ((br - tr) * (y - yt)) / (yb - yt);
  const shape = `M${tl} ${yt} L${bl} ${yb} L${br} ${yb} L${tr} ${yt}`;
  return {
    body: `<path d="${shape}Z" fill="${PAPER}"/>`,
    band(y1, y2, fill, op = 1, wave = 0) {
      const m = (L(y1) + R(y1)) / 2, q = (R(y1) - L(y1)) / 4;
      const top = wave ? `M${L(y1)} ${y1} Q${m - q} ${y1 + wave} ${m} ${y1} T${R(y1)} ${y1}` : `M${L(y1)} ${y1} L${R(y1)} ${y1}`;
      return `<path d="${top} L${R(y2)} ${y2} L${L(y2)} ${y2}Z" fill="${fill}" fill-opacity="${op}"/>`;
    },
    shine: `<path d="M${L(yt + 8) + 3.5} ${yt + 8} L${L(yb - 10) + 3.5} ${yb - 10}" stroke="${PAPER}" stroke-width="1.8" stroke-linecap="round" opacity=".9"/>`,
    outline: `<path d="${shape}" ${S()}/><ellipse cx="${(tl + tr) / 2}" cy="${yt}" rx="${(tr - tl) / 2}" ry="2.4" ${S(1.4)}/>`,
  };
}
const cube = (x, y, s, r, a) => `<g transform="rotate(${r} ${x + s / 2} ${y + s / 2})"><rect x="${x}" y="${y}" width="${s}" height="${s}" rx="1.6" fill="${PAPER}"/><rect x="${x}" y="${y}" width="${s}" height="${s}" rx="1.6" fill="${a}" fill-opacity=".28" ${SF(1.2)}/></g>`;
const backdrop = (a) => `<circle cx="54.5" cy="44" r="31" fill="${a}" fill-opacity=".2"/><path d="M10 76 H99" ${S(1.2)}/>`;
const dots = (pts, r = 1.3, w = 1) => pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}" ${S(w)}/>`).join("");
const steam = (xs, y = 26) => `<path d="${xs.map((x) => `M${x} ${y} q-4 -5 0 -9 q4 -4 0 -9`).join(" ")}" ${S(1.4)}/>`;
// Cup on a saucer, shared by flat white and capuccino.
const cupOnSaucer = `<ellipse cx="54.5" cy="70" rx="35" ry="6" fill="${PAPER}" ${SF()}/>
  <path d="M76 46 q12 -1 11 7.5 q-.6 7 -13 6" ${S()}/>
  <path d="M31 40 L35 62 Q37 70 54.5 70 Q72 70 74 62 L78 40Z" fill="${PAPER}" ${SF()}/>`;

// Scenes live in a 109×82 box. (Capuccino: no spoon; espresso tonic: just the pour.)
const SCENES = {
  flatwhite: (a) => `${backdrop(a)}${steam([47, 61])}${cupOnSaucer}
    <ellipse cx="54.5" cy="40" rx="23.5" ry="6" fill="${a}" ${SF()}/>
    <path d="M54.5 44.5 C48.5 41 49 36.4 52 36.6 C53.4 36.7 54.2 37.6 54.5 38.6 C54.8 37.6 55.6 36.7 57 36.6 C60 36.4 60.5 41 54.5 44.5Z" fill="${PAPER}"/>`,

  coldbrew: (a) => {
    const g = glass(36, 72, 40, 68, 16, 74);
    return `${backdrop(a)}
    <circle cx="89" cy="24" r="9" fill="${PAPER}" ${SF(1.6)}/><path d="M89 24 V18.5 M89 24 L93 26" ${S(1.4)}/>
    <text x="89" y="42" text-anchor="middle" font-family="${MONO}" font-size="6" letter-spacing=".5" fill="${INK}">12 H</text>
    ${g.body}${g.band(28, 74, INK, 0.86)}
    <path d="M59 30 L74 5" stroke="${INK}" stroke-width="4.4" stroke-linecap="round"/><path d="M59 30 L74 5" stroke="${a}" stroke-width="2" stroke-linecap="round"/>
    ${cube(43, 31, 11, -14, a)}${cube(55, 38, 10, 12, a)}${cube(45, 47, 9, 6, a)}
    ${g.shine}${g.outline}`;
  },

  // Foam dome over the rim, cocoa dusted, spoon on the saucer.
  capuccino: (a) => `${backdrop(a)}${steam([44, 58], 20)}
    ${cupOnSaucer}
    <path d="M30.5 40 C33 27 76 27 78.5 40 Z" fill="${PAPER}" ${SF()}/>
    <ellipse cx="54.5" cy="40" rx="24" ry="3.4" fill="${PAPER}" ${SF(1.4)}/>
    ${[[44, 33], [50, 31], [56, 30.5], [62, 31.5], [67, 34], [47, 36], [53, 34.5], [59, 35], [64, 37], [41, 37.5]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.1" fill="${a}"/>`).join("")}`,

  // Glass mug in layers (chocolate, espresso, milk) and a chocolate square beside it.
  moka: (a) => `${backdrop(a)}
    <path d="M74 38 h5 a9 9 0 0 1 0 18 h-5" ${S()}/>
    <path d="M36 28 V68 a6 6 0 0 0 6 6 H68 a6 6 0 0 0 6 -6 V28Z" fill="${PAPER}"/>
    <rect x="36" y="34" width="38" height="12" fill="${a}" fill-opacity=".22"/>
    <rect x="36" y="46" width="38" height="11" fill="${INK}" fill-opacity=".86"/>
    <path d="M36 57 H74 V68 a6 6 0 0 1 -6 6 H42 a6 6 0 0 1 -6 -6Z" fill="${a}"/>
    <path d="M40 31 V64" stroke="${PAPER}" stroke-width="1.8" stroke-linecap="round" opacity=".9"/>
    <path d="M36 28 V68 a6 6 0 0 0 6 6 H68 a6 6 0 0 0 6 -6 V28" ${S()}/><path d="M36 28 H74" ${S(1.4)}/>
    <g transform="rotate(-10 20 64)"><rect x="10" y="56" width="20" height="16" rx="1.5" fill="${a}" ${SF(1.5)}/><path d="M20 56 V72 M10 64 H30" stroke="${PAPER}" stroke-width="1.2" opacity=".6"/></g>`,

  dirtyhorchata: (a) => {
    const g = glass(33, 70, 37, 66, 16, 74);
    const rice = [[16, 72, 20], [22, 74.5, -10], [19, 68.5, 50], [26, 71, 15], [13, 68, -30]]
      .map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="2.3" ry="1.1" transform="rotate(${r} ${x} ${y})" fill="${PAPER}" ${SF(1)}/>`).join("");
    return `${backdrop(a)}
    ${g.body}${g.band(26, 74, a, 0.25)}${g.band(26, 33, INK, 0.86, 3)}
    <path d="M45 33 q5 8 -1 14 q-5 6 2 12 M57 33 q-3 6 2 10" stroke="${INK}" stroke-opacity=".45" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    ${cube(52, 44, 9, 14, a)}${cube(41, 55, 9, -8, a)}
    ${g.shine}${g.outline}
    <g transform="rotate(-16 86 64)"><rect x="72" y="61.5" width="28" height="5.5" rx="2.75" fill="${a}" ${SF(1.5)}/><path d="M74.5 61.8 q-2 2.7 0 5" ${S(1)}/></g>
    <g transform="rotate(9 86 71)"><rect x="73" y="68.5" width="26" height="5.5" rx="2.75" fill="${a}" ${SF(1.5)}/><path d="M75.5 68.8 q-2 2.7 0 5" ${S(1)}/></g>
    ${rice}`;
  },

  matchahorchata: (a) => {
    const g = glass(40, 77, 44, 73, 16, 74);
    return `${backdrop(a)}
    <rect x="14.5" y="20" width="6" height="23" rx="2" fill="${PAPER}" ${SF(1.6)}/>
    <path d="M12.5 44 h10 c4.5 8 6.5 18 3 26 h-16 c-3.5 -8 -1.5 -18 3 -26z" fill="${a}" fill-opacity=".35" ${SF(1.6)}/>
    <path d="M15 46 c-2 8 -2 16 -1 23 M17.5 46 v23 M20 46 c2 8 2 16 1 23" ${S(1)}/>
    ${g.body}${g.band(24, 74, a, 0.85, 2)}${g.band(49, 74, PAPER, 1, 3.5)}
    <path d="M50 55 q6 3 12 0 q5 -3 9 1" stroke="${a}" stroke-opacity=".5" stroke-width="2" fill="none" stroke-linecap="round"/>
    ${cube(50, 30, 10, -12, a)}${cube(61, 36, 9, 14, a)}
    ${g.shine}${g.outline}`;
  },

  orangetonic: (a) => {
    const g = glass(38, 71, 41, 68, 14, 74);
    const seg = [0, 60, 120, 180, 240, 300].map((d) => { const r = (d * Math.PI) / 180; return `M72 17 L${(72 + 7 * Math.cos(r)).toFixed(1)} ${(17 + 7 * Math.sin(r)).toFixed(1)}`; }).join(" ");
    return `${backdrop(a)}
    ${g.body}${g.band(52, 74, a, 0.7)}${g.band(23, 30, INK, 0.86, 2.2)}
    ${dots([[47, 36], [52, 42], [60, 33], [57, 47], [63, 41], [48, 47]])}
    ${g.shine}${g.outline}
    <circle cx="72" cy="17" r="10" fill="${a}" ${SF(1.6)}/>
    <circle cx="72" cy="17" r="7.2" fill="${PAPER}" fill-opacity=".5"/>
    <path d="${seg}" stroke="${a}" stroke-width="1.2"/>`;
  },

  londonfog: (a) => `${backdrop(a)}
    <path d="M24 37 A8 8 0 0 1 27 22 A11 11 0 0 1 47 15 A10.5 10.5 0 0 1 66 19 A8.5 8.5 0 0 1 75 36 Z" fill="${a}" fill-opacity=".45" ${SF(1.6)}/>
    <path d="M30 31 h14 M50 28 h16 M38 25 h12" ${S(1.2)} opacity=".7"/>
    <path d="M76 48 h4 a8 8 0 0 1 0 16 h-5" ${S()}/>
    <path d="M34 40 h42 v24 a10 10 0 0 1 -10 10 h-22 a10 10 0 0 1 -10 -10 z" fill="${PAPER}"/>
    <rect x="34" y="50" width="42" height="7" fill="${a}" fill-opacity=".75"/>
    <path d="M34 40 h42 v24 a10 10 0 0 1 -10 10 h-22 a10 10 0 0 1 -10 -10 z" ${S()}/>
    <path d="M40 40 C38 47 31 47 28.5 54" ${S(1)}/>
    <g transform="rotate(-8 28 60)"><rect x="22.5" y="54" width="11" height="12" rx="1" fill="${PAPER}" ${SF(1.4)}/>
    <text x="28" y="62.4" text-anchor="middle" font-family="${MONO}" font-size="5" fill="${INK}">EG</text></g>`,

  // Pink tonic with ice, a lychee on the rim and a mango cube at the foot.
  mangolychee: (a) => {
    const g = glass(37, 70, 40, 67, 16, 74);
    const bumps = Array.from({ length: 12 }, (_, i) => { const r = (i * 30 * Math.PI) / 180; return [(73 + 6 * Math.cos(r)).toFixed(1), (19 + 6 * Math.sin(r)).toFixed(1)]; });
    return `${backdrop(a)}
    ${g.body}${g.band(30, 74, a, 0.55, 2.5)}${g.band(56, 74, "#e8a33d", 0.55)}
    ${cube(45, 33, 10, -10, a)}${cube(55, 40, 9, 16, a)}
    ${dots([[47, 52], [58, 56], [52, 62], [61, 66], [46, 66]])}
    ${g.shine}${g.outline}
    <circle cx="73" cy="19" r="8.6" fill="${PAPER}" ${SF(1.6)}/>
    ${bumps.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1" fill="${a}"/>`).join("")}
    <path d="M78 12 q6 -5 11 -2 q-5 5 -11 2z" fill="${PAPER}" ${SF(1.2)}/>
    <g transform="rotate(12 86 68)"><rect x="80" y="62" width="11" height="11" rx="2" fill="#e8a33d" ${SF(1.5)}/><path d="M80 66.5 h11 M85.5 62 v11" stroke="${INK}" stroke-width=".8" opacity=".5"/></g>`;
  },

  // Latte glass with an espresso shot on top, star anise and cardamom beside it.
  dirtychai: (a) => {
    const g = glass(40, 72, 43, 69, 18, 74);
    const petals = Array.from({ length: 8 }, (_, i) => `<ellipse cx="22" cy="58" rx="2.4" ry="6.2" transform="rotate(${i * 45} 22 64.5) translate(0 0)" fill="${a}" ${SF(1.1)}/>`).join("");
    return `${backdrop(a)}${steam([50, 62], 14)}
    ${g.body}${g.band(24, 74, a, 0.3, 2)}${g.band(24, 31, INK, 0.86, 2.5)}
    <path d="M46 40 q9 4 18 0 M46 52 q9 4 18 0" stroke="${a}" stroke-opacity=".6" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    ${g.shine}${g.outline}
    ${petals}<circle cx="22" cy="64.5" r="2" fill="${PAPER}" ${SF(1.1)}/>
    <ellipse cx="84" cy="70" rx="4" ry="2.4" transform="rotate(-20 84 70)" fill="${PAPER}" ${SF(1.2)}/>
    <ellipse cx="92" cy="72" rx="4" ry="2.4" transform="rotate(15 92 72)" fill="${PAPER}" ${SF(1.2)}/>`;
  },

  // Espresso floating on tonic, poured from a shot glass.
  espressotonic: (a) => {
    const g = glass(38, 72, 41, 69, 22, 74);
    return `${backdrop(a)}
    <g transform="rotate(-38 80 14)"><path d="M73 6 L75 22 H85 L87 6Z" fill="${PAPER}" ${SF(1.5)}/><path d="M74 12 L75 22 H85 L86 12Z" fill="${INK}" fill-opacity=".86"/></g>
    <path d="M71 21 C67 24 63 27 60 32" stroke="${INK}" stroke-width="2" fill="none" stroke-linecap="round" opacity=".86"/>
    ${g.body}${g.band(30, 74, a, 0.28)}${g.band(30, 39, INK, 0.86, 2.5)}
    <path d="M44 39 q3 4 0 8 M60 39 q-2 5 1 9" stroke="${INK}" stroke-opacity=".35" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    ${cube(46, 50, 10, -12, a)}${cube(57, 56, 9, 10, a)}
    ${dots([[50, 44], [62, 47], [46, 63], [55, 68], [63, 66], [53, 49]], 1.2)}
    ${g.shine}${g.outline}`;
  },

  // Chemex: paper cone on top, wooden collar with its tie, brewed coffee below.
  filtrados: (a) => `${backdrop(a)}
    <path d="M30 12 L79 12 L59 40 L50 40 Z" fill="${PAPER}" ${SF()}/>
    <path d="M30 12 L54.5 40 M79 12 L66 26" ${S(1.1)} opacity=".6"/>
    <path d="M50 46 L59 46 L80 70 Q54.5 78 29 70 Z" fill="${PAPER}"/>
    <path d="M37.5 60 L71.5 60 L80 70 Q54.5 78 29 70 Z" fill="${INK}" fill-opacity=".86"/>
    <path d="M50 46 L59 46 L80 70 Q54.5 78 29 70 Z" ${S()}/>
    <path d="M47 38 L62 38 L63.5 48 L45.5 48 Z" fill="${a}" ${SF(1.6)}/>
    <path d="M45.5 43 C40 44 38 48 40 52 M45.5 43 C41 47 42 52 45 54" ${S(1.2)}/><circle cx="40.5" cy="52.5" r="1.4" fill="${a}" ${SF(1)}/>
    <path d="M54.5 50 v3 M54.5 56 v2" stroke="${INK}" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M44 66 l3 -3" stroke="${PAPER}" stroke-width="1.6" stroke-linecap="round" opacity=".7"/>`,
};

const DRINKS = [
  // Clásicos
  { id: "flatwhite", n: 1, cat: "Café", name: "Flat white", coord: "Espresso / Leche vaporizada", accent: "#b8865a" },
  { id: "coldbrew", n: 2, cat: "Café", name: "Cold brew", coord: "Café / Agua fría / Tiempo", accent: "#4b7d99" },
  { id: "capuccino", n: 3, cat: "Café", name: "Capuccino", coord: "Espresso / Leche / Espuma", accent: "#c98f2c" },
  { id: "moka", n: 4, cat: "Café", name: "Moka", coord: "Espresso / Chocolate / Leche", accent: "#7a3e2e" },
  // Firmas de la casa
  { id: "dirtyhorchata", n: 5, cat: "Café", name: "Dirty horchata", coord: "Espresso / Horchata / Leche", accent: "#a86b3c" },
  { id: "matchahorchata", n: 6, cat: "Sin café", name: "Matcha horchata", coord: "Matcha / Horchata / Leche", accent: "#7d9a35" },
  { id: "orangetonic", n: 7, cat: "Café", name: "Orange tonic", coord: "Espresso / Naranja / Tónica", accent: "#e0742a" },
  // Para descubrir
  { id: "londonfog", n: 8, cat: "Sin café", name: "London fog", coord: "Earl grey / Vainilla / Leche", accent: "#7581aa" },
  { id: "mangolychee", n: 9, cat: "Sin café", name: "Mango lychee", coord: "Té mango lychee / Tónica", accent: "#d9607a" },
  { id: "dirtychai", n: 10, cat: "Café", name: "Dirty chai latte", coord: "Chai / Espresso / Leche", accent: "#8e5b8c" },
  { id: "espressotonic", n: 11, cat: "Café", name: "Espresso tonic", coord: "Espresso / Agua tónica", accent: "#3f8f86" },
  { id: "filtrados", n: 12, cat: "Café", name: "Filtrados", coord: "Chemex / V60 / Aeropress", accent: "#3d6b4f" },
];

// Same face as the artifact: perforated paper, frame, header, scene, name + coordinates. 125×150 = 5:6.
function stampSvg(d) {
  const W = 125, H = 150, sx = W / 12, sy = H / 14, r = 3.6, holes = [];
  for (let i = 0; i < 12; i++) { const x = sx / 2 + i * sx; holes.push(`<circle cx="${x}" cy="0" r="${r}"/><circle cx="${x}" cy="${H}" r="${r}"/>`); }
  for (let i = 0; i < 14; i++) { const y = sy / 2 + i * sy; holes.push(`<circle cx="0" cy="${y}" r="${r}"/><circle cx="${W}" cy="${y}" r="${r}"/>`); }
  const fit = (t, px) => (t.length * px > 97 ? ` textLength="97" lengthAdjust="spacingAndGlyphs"` : "");
  const coord = d.coord.toUpperCase();
  const nameSize = d.name.length > 16 ? 10.5 : 12.5;
  return `<svg viewBox="0 0 ${W} ${H}" width="750" height="900" xmlns="http://www.w3.org/2000/svg">
<defs>${FONT}<mask id="m"><rect width="${W}" height="${H}" fill="#fff"/><g fill="#000">${holes.join("")}</g></mask></defs>
<rect width="${W}" height="${H}" fill="${PAPER}" mask="url(#m)"/>
<rect x="8" y="8" width="109" height="134" fill="none" stroke="${INK}" stroke-width="1.5"/>
<text x="13.5" y="19.5" font-family="${MONO}" font-size="6.6" letter-spacing=".7" fill="${INK}">${d.cat.toUpperCase()}</text>
<text x="111.5" y="19.5" text-anchor="end" font-family="${MONO}" font-size="6.6" letter-spacing=".7" fill="${INK}">N° ${String(d.n).padStart(2, "0")}/12</text>
<svg x="8" y="24" width="109" height="82" viewBox="0 0 109 82" overflow="hidden">${SCENES[d.id](d.accent)}</svg>
<line x1="8" y1="108" x2="117" y2="108" stroke="${INK}" stroke-width="1.5"/>
<text x="62.5" y="124" text-anchor="middle" font-family="${SANS}" font-weight="800" font-size="${nameSize}" letter-spacing="-.4" fill="${INK}"${fit(d.name, nameSize * 0.56)}>${d.name}</text>
<text x="62.5" y="135.5" text-anchor="middle" font-family="${MONO}" font-size="5.3" letter-spacing=".45" fill="${INK}"${fit(coord, 3.65)}>${coord}</text>
</svg>`;
}

mkdirSync(OUT, { recursive: true });
mkdirSync(SVG_OUT, { recursive: true });
const { chromium } = createRequire(import.meta.url)(process.env.PLAYWRIGHT ?? "playwright");
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 750, height: 900 } });
const files = [];
for (const d of DRINKS) {
  const base = `${String(d.n).padStart(2, "0")}-${d.id}`;
  const svg = stampSvg(d);
  writeFileSync(join(SVG_OUT, `${base}.svg`), svg);
  await page.setContent(`<!doctype html><style>html,body{margin:0;background:transparent}svg{display:block}</style>${svg}`);
  await page.evaluate(() => document.fonts.ready);
  const file = join(OUT, `${base}.png`);
  await page.locator("body > svg").screenshot({ path: file, omitBackground: true });
  files.push(file);
  console.log(file);
}
await browser.close();
// Contact sheet to review all twelve at once.
const tiles = await Promise.all(files.map((f) => sharp(f).resize(250, 300).png().toBuffer()));
await sharp({ create: { width: 4 * 270 + 20, height: 3 * 320 + 20, channels: 4, background: "#d9d9d9" } })
  .composite(tiles.map((input, i) => ({ input, left: 20 + (i % 4) * 270, top: 20 + Math.floor(i / 4) * 320 })))
  .png().toFile(join(HERE, "hoja.png"));
