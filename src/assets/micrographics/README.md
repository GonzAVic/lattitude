# Micrographics — librería de assets del sitio

Fuente de los micrográficos decorativos usados en LATTITUDE°. Exportación local de `Micrographics_Templates.fig`. Los SVG de texto usan los **contornos de glyphs del propio documento**, por lo que no dependen de tener las fuentes originales instaladas.

Esta carpeta vive en `src/assets/` (no en `public/`) porque son **fuentes sin procesar**: cada uno viene con fondo #191919 + contenido #fffaee a 1080×1080, pensado para un fondo oscuro. Para usar uno en el sitio (que es blanco/negro) hay que procesarlo primero — ver "Cómo integrar uno nuevo" abajo.

## Estructura

- `exports/`: 50 composiciones finales, `001.svg` a `050.svg` (fondo oscuro, contenido crema, sin procesar).
- `symbols/`: 54 piezas sueltas reutilizables (cruces, círculos, grids, etc.) que no son parte de los 50 frames numerados.
- `manifest.json`: índice máquina-legible con IDs de Figma, nombres, tipos, padres, dimensiones, texto y rutas a los SVG.
- `preview-contact-sheet.png`: vista rápida de los 50 micrográficos para elegir cuál usar.
- `Micrographics_Templates.fig`: archivo fuente original de Figma (por si hace falta exportar algo distinto a futuro).

Se eliminaron del export original `assets/svg-nodes/` (dump exhaustivo nodo-por-nodo, redundante con `exports/`) y `assets/images/` (15 imágenes raster embebidas sin relación con la marca — retratos, paisajes, el check de Twitter/X, pinturas).

## Ya integrados en el sitio

| Origen | Procesado a | Usado en |
|---|---|---|
| `exports/050.svg` | `public/micrographic-050.svg` | Home → sección "Nothing here is here by accident" (texto "design labs" reemplazado por copy real del sitio) |
| `exports/019.svg` | `public/micrographic-about.svg` | `/about` → sección "How it started" |
| `exports/031.svg` | `public/micrographic-letsride.svg` | `/letsride` → hero |

## Cómo integrar uno nuevo

1. Elegí un candidato mirando `preview-contact-sheet.png` (o el node ID en `manifest.json`), evitando los que traen direcciones/nombres de estudio inventados (ej. "207 East 32nd Street, New York") si no querés dejarlos visibles.
2. Quitá el `<path>` de fondo (`fill="#191919"`, el rectángulo 0,0→1080,1080).
3. Recoloreá `fill="#fffaee"` y `stroke="#fffaee"` a `#000000`.
4. Recortá el `viewBox` al bounding box real del contenido (con `getBBox()` en un navegador headless) — el archivo original trae mucho espacio vacío alrededor.
5. Guardalo en `public/micrographic-<nombre>.svg` y usalo como `<img>`.

## Micrográficos

### 001

- Archivo: `micrographics/001.svg`
- Node ID: `15:422`
- Composición gráfica de 1080×1080 px construida con 7 vectores, 7 bloques tipográficos. Paleta detectada: #191919, #FFFAEE. Texto destacado: “HUMAN - MADE”; “43R-004585”; “OOO5”; “KINETIC”.

### 002

- Archivo: `micrographics/002.svg`
- Node ID: `15:423`
- Composición gráfica de 1080×1080 px construida con 5 vectores, 3 bloques tipográficos, 1 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE. Texto destacado: “DESIGN DEPT. PIXELS PUSHED TO PERFECTION”; “XIV”; “©2026”.

### 003

- Archivo: `micrographics/003.svg`
- Node ID: `15:424`
- Composición gráfica de 1080×1080 px construida con 7 vectores, 5 bloques tipográficos. Paleta detectada: #191919, #FFFAEE. Texto destacado: “FUNCTION”; “FORM &”; “ASSET_ID 2026_MG_990X”; “©2026”.

### 004

- Archivo: `micrographics/004.svg`
- Node ID: `15:425`
- Composición gráfica de 1080×1080 px construida con 29 vectores, 6 bloques tipográficos, 1 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE. Texto destacado: “26”; “HUMANMADE”; “KINETIC”; “©2026”.

### 005

- Archivo: `micrographics/005.svg`
- Node ID: `15:426`
- Composición gráfica de 1080×1080 px construida con 8 vectores, 3 bloques tipográficos. Paleta detectada: #191919, #FFFAEE. Texto destacado: “©2026”; “ASSET_ID 2026_MG_990X”; “FORM & FUNCTION”.

### 006

- Archivo: `micrographics/006.svg`
- Node ID: `15:427`
- Composición gráfica de 1080×1080 px construida con 1 vectores, 4 bloques tipográficos, 1 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE. Texto destacado: “51°50′18″N 12°13′38″E”; “Staatliches Bauhaus”; “Founded 1919”; “©”.

### 007

- Archivo: `micrographics/007.svg`
- Node ID: `15:428`
- Composición gráfica de 1080×1080 px construida con 3 vectores, 5 bloques tipográficos, 1 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE. Texto destacado: “43R-004585”; “OPTICAL / 20”; “ASSET_ID 2026_MG_990X”; “XIV”.

### 008

- Archivo: `micrographics/008.svg`
- Node ID: `15:429`
- Composición gráfica de 1080×1080 px construida con 7 vectores, 4 bloques tipográficos, 1 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE. Texto destacado: “FORM”; “FUNCT- ION”; “F”; “©2026”.

### 009

- Archivo: `micrographics/009.svg`
- Node ID: `15:430`
- Composición gráfica de 1080×1080 px construida con 5 vectores, 4 bloques tipográficos. Paleta detectada: #191919, #FFFAEE. Texto destacado: “REFINED_DIGITAL_ARTIFACTS KINETIC_IDENTITIES MINIMAL_FORM RASTER FONT 02”; “01 TYPE VECTOR TRUE_NORTH MINIMAL_FORM BEYOND_THE_INTERFACE CURATED_VISUAL_INFRASTRUCTURE”; “XIV”; “26”.

### 010

- Archivo: `micrographics/010.svg`
- Node ID: `15:431`
- Composición gráfica de 1080×1080 px construida con 9 vectores, 5 bloques tipográficos, 1 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE, #33363F. Texto destacado: “HUMAN - MADE”; “KINETIC”; “©2026”; “43R-004585”.

### 011

- Archivo: `micrographics/011.svg`
- Node ID: `32:250`
- Composición gráfica de 1080×1080 px construida con 10 vectores, 6 bloques tipográficos, 1 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE. Texto destacado: “AMPERS”; “&”; “ASSET_ID 2026_MG_990X”; “©2026”.

### 012

- Archivo: `micrographics/012.svg`
- Node ID: `32:273`
- Composición gráfica de 1080×1080 px construida con 34 vectores, 6 bloques tipográficos, 1 rectángulos redondeados, 4 líneas. Paleta detectada: #191919, #FFFAEE. Texto destacado: “#FFFAEE_SPEC”; “INTENTION OVER TIME LEADS TO THE HIGHEST FORM OF CRAFT”; “MMXXVI”; “26”.

### 013

- Archivo: `micrographics/013.svg`
- Node ID: `35:350`
- Composición gráfica de 1080×1080 px construida con 6 vectores, 5 bloques tipográficos, 1 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE. Texto destacado: “©2026”; “>>_LAYOUT”; “REFINED_DIGITAL_ARTIFACTS KINETIC_IDENTITIES 02”; “FORM & FUNCTION”.

### 014

- Archivo: `micrographics/014.svg`
- Node ID: `38:453`
- Composición gráfica de 1080×1080 px construida con 9 vectores, 5 bloques tipográficos, 1 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE. Texto destacado: “©2026”; “OPTICAL / 20”; “26 / ARCHITECT”; “43R-004585”.

### 015

- Archivo: `micrographics/015.svg`
- Node ID: `43:579`
- Composición gráfica de 1080×1080 px construida con 18 vectores, 2 bloques tipográficos. Paleta detectada: #191919, #FFFAEE. Texto destacado: “JUSTIFY RIGHT MINIMAL BEYOND THE INTERFACE 20”; “26”.

### 016

- Archivo: `micrographics/016.svg`
- Node ID: `43:756`
- Composición gráfica de 1080×1080 px construida con 17 vectores, 8 bloques tipográficos. Paleta detectada: #191919, #FFFAEE. Texto destacado: “ASSET_ID 2026_MG_990X”; ““Scalable vector graphics””; “©2026”; “/PROCESS/V01”.

### 017

- Archivo: `micrographics/017.svg`
- Node ID: `43:652`
- Composición gráfica de 1080×1080 px construida con 1 vectores, 1 bloques tipográficos. Paleta detectada: #191919, #FFFAEE. Texto destacado: “DESIGN DEPT. BUILDING BEYOND THE PLATFORM 20 26”.

### 018

- Archivo: `micrographics/018.svg`
- Node ID: `43:702`
- Composición gráfica de 1080×1080 px construida con 6 vectores, 5 bloques tipográficos, 5 líneas. Paleta detectada: #191919, #FFFAEE. Texto destacado: “DSGNDEPT.”; “SCALE: 100% OPACITY: 0.85 CONTRAST: +15% GRID_SNAP: 100%”; “207 East 32nd Street, New York, NY 10016, USA”; “©2026”.

### 019

- Archivo: `micrographics/019.svg`
- Node ID: `43:715`
- Composición gráfica de 1080×1080 px construida con 8 vectores, 2 bloques tipográficos, 8 elipses, 1 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE. Texto destacado: “THE TYPEFACE IS THE VOICE OF THE BRAND”; “HUMAN MADE”.

### 020

- Archivo: `micrographics/020.svg`
- Node ID: `43:733`
- Composición gráfica de 1080×1080 px construida con 35 vectores, 5 bloques tipográficos, 1 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE. Texto destacado: “ASSET_ID 2026_MG_990X”; “12_COL_MODULAR”; “HUMAN MADE”; “©2026”.

### 021

- Archivo: `micrographics/021.svg`
- Node ID: `58:2807`
- Composición gráfica de 1080×1080 px construida con 2 vectores, 5 bloques tipográficos. Paleta detectada: #191919, #FFFAEE. Texto destacado: “Ø”; “1080, 9:16, 1x1”; “px”; ““DSGN DEPT””.

### 022

- Archivo: `micrographics/022.svg`
- Node ID: `59:2868`
- Composición gráfica de 1080×1080 px construida con 7 vectores, 4 bloques tipográficos. Paleta detectada: #191919, #FFFAEE. Texto destacado: “001”; “DSGN DEPT”; “GRAPHIC”; “1920 / 9:16 / 1 x 1”.

### 023

- Archivo: `micrographics/023.svg`
- Node ID: `66:78`
- Composición gráfica de 1080×1080 px construida con 6 vectores, 9 bloques tipográficos, 3 rectángulos redondeados, 2 líneas. Paleta detectada: #191919, #FFFAEE. Texto destacado: “01”; “02”; “03”; “GRFK”.

### 024

- Archivo: `micrographics/024.svg`
- Node ID: `66:130`
- Composición gráfica de 1080×1080 px construida con 7 vectores, 13 bloques tipográficos, 1 elipses, 2 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE, #C4C4C4, #000000. Texto destacado: “RESOLUTION”; “®”; “PROFILE”; “ASPECT RATIO”.

### 025

- Archivo: `micrographics/025.svg`
- Node ID: `68:246`
- Composición gráfica de 1080×1080 px construida con 22 vectores, 6 bloques tipográficos, 3 líneas. Paleta detectada: #191919, #FFFAEE. Texto destacado: “A CONSIDERED FUTURE”; “DESIGN THE POSSIBILITY”; “BASE_UNIT: 4PT [SNAP_TO_GRID]”; “DESIGN DEPT”.

### 026

- Archivo: `micrographics/026.svg`
- Node ID: `85:1262`
- Composición gráfica de 1080×1080 px construida con 6 vectores, 8 bloques tipográficos. Paleta detectada: #191919, #FFFAEE. Texto destacado: “D”; “S”; “G”; “N”.

### 027

- Archivo: `micrographics/027.svg`
- Node ID: `85:1283`
- Composición gráfica de 1080×1080 px construida con 6 vectores, 5 bloques tipográficos. Paleta detectada: #191919, #FFFAEE. Texto destacado: “( 001 )”; “kinetic”; “©2026”; “DEPT”.

### 028

- Archivo: `micrographics/028.svg`
- Node ID: `93:2`
- Composición gráfica de 1080×1080 px construida con 8 bloques tipográficos. Paleta detectada: #191919, #FFFAEE. Texto destacado: “151 THIRD StREET”; “San Francisco, CA 94103”; “CA - USA”; “415”.

### 029

- Archivo: `micrographics/029.svg`
- Node ID: `93:5`
- Composición gráfica de 1080×1080 px construida con 4 vectores, 6 bloques tipográficos, 1 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE. Texto destacado: “DSGN”; “THE DESIGN DEPARTMENT layout, concept, PIXELS ALL”; “MADE BY HUMANS”; “© 2026 Property of dsgn dept”.

### 030

- Archivo: `micrographics/030.svg`
- Node ID: `93:8`
- Composición gráfica de 1080×1080 px construida con 4 vectores, 4 bloques tipográficos, 1 elipses, 10 líneas. Paleta detectada: #191919, #FFFAEE. Texto destacado: “P”; “X”; “THE CREATIVE DEPARTMENT CONCEPT, DESIGN, REFINE”; “©2026”.

### 031

- Archivo: `micrographics/031.svg`
- Node ID: `94:177`
- Composición gráfica de 1080×1080 px construida con 8 vectores, 10 bloques tipográficos, 6 elipses, 1 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE. Texto destacado: “DIGITAL_DESIGN_ARTIFACTS KINETIC_SYSTEMS PIXELS_FORM”; “SYSTEMS 9:16”; “LAYOUTS 4:5”; “VECTORS 3:4”.

### 032

- Archivo: `micrographics/032.svg`
- Node ID: `94:197`
- Composición gráfica de 1080×1080 px construida con 12 vectores, 4 bloques tipográficos, 1 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE. Texto destacado: “THE DESIGN DEPARTMENT layout/ concept/ PIXELS/ ALL”; “MADE BY HUMANS”; “NY 10018”; “DSGN DEPT”.

### 033

- Archivo: `micrographics/033.svg`
- Node ID: `94:211`
- Composición gráfica de 1080×1080 px construida con 4 vectores, 9 bloques tipográficos, 1 rectángulos redondeados, 2 líneas. Paleta detectada: #191919, #FFFAEE. Texto destacado: “DSGN-001”; “DEPT.”; “5 0 5 / 5 4 1”; “PDX, ORE”.

### 034

- Archivo: `micrographics/034.svg`
- Node ID: `94:220`
- Composición gráfica de 1080×1080 px construida con 1 vectores, 1 bloques tipográficos, 16 elipses, 2 líneas. Paleta detectada: #191919, #FFFAEE. Texto destacado: “JPEG DIVISION BEYOND THE MEDIUM 20 26 GREAT DESIGN IS A FORM OF GOOD MANNERS”.

### 035

- Archivo: `micrographics/035.svg`
- Node ID: `94:233`
- Composición gráfica de 1080×1080 px construida con 8 vectores, 5 bloques tipográficos. Paleta detectada: #191919, #FFFAEE. Texto destacado: “Graphics Research Lab”; “>>_LAYOUT”; “REFINED_DIGITAL_ARTIFACTS KINETIC_IDENTITIES 02”; “REFINED_DIGITAL_ARTIFACTS KINETIC_IDENTITIES 01”.

### 036

- Archivo: `micrographics/036.svg`
- Node ID: `94:255`
- Composición gráfica de 1080×1080 px construida con 27 vectores, 6 bloques tipográficos, 3 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE. Texto destacado: “DESIGN DEPARTMENT”; “PDX”; “MADE BY HUMANS”; “INTENTION OVER TIME LEADS TO HIGH FORMS OF CRAFT”.

### 037

- Archivo: `micrographics/037.svg`
- Node ID: `94:256`
- Composición gráfica de 1080×1080 px construida con 5 vectores, 3 bloques tipográficos, 5 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE. Texto destacado: “DIGITAL_DESIGN_ARTIFACTS KINETIC_SYSTEMS PIXELS_FORM”; “01 TYPE VECTOR”; “XIV”.

### 038

- Archivo: `micrographics/038.svg`
- Node ID: `94:257`
- Composición gráfica de 1080×1080 px construida con 42 vectores, 3 bloques tipográficos, 1 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE. Texto destacado: “DSGN”; “© 2026 Property of dsgn dept”; “43R-004585”.

### 039

- Archivo: `micrographics/039.svg`
- Node ID: `94:258`
- Composición gráfica de 1080×1080 px construida con 234 vectores, 3 bloques tipográficos. Paleta detectada: #191919, #FFFAEE. Texto destacado: “76”; “© 2026 Property of dsgn dept”; “kinetic”.

### 040

- Archivo: `micrographics/040.svg`
- Node ID: `94:259`
- Composición gráfica de 1080×1080 px construida con 8 vectores, 7 bloques tipográficos, 1 elipses, 4 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE. Texto destacado: “INTENTION OVER TIME LEADS TO THE HIGHEST FORM OF CRAFT”; “DSGN DEPT.”; “207 East 32nd Street, New York, NY 10016, USA”; “40° 44′ 40″ N, 73° 58′ 42″ W”.

### 041

- Archivo: `micrographics/041.svg`
- Node ID: `113:2`
- Composición gráfica de 1080×1080 px construida con 8 vectores, 11 bloques tipográficos, 1 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE. Texto destacado: “The shapes”; “can speak before”; “the sentence”; “can be heard”.

### 042

- Archivo: `micrographics/042.svg`
- Node ID: `113:71`
- Composición gráfica de 1080×1080 px construida con 47 vectores, 6 bloques tipográficos, 1 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE. Texto destacado: “GLBL DSGN DEPT”; “XIV”; “1920 / 9:16 / 1 x 1”; “40° 44′ 40″ N, 73° 58′ 42″ W”.

### 043

- Archivo: `micrographics/043.svg`
- Node ID: `113:111`
- Composición gráfica de 1080×1080 px construida con 6 vectores, 3 bloques tipográficos. Paleta detectada: #191919, #FFFAEE. Texto destacado: “NEUTRAL_01: HEX #F2F2F2 | RGB 242, 242, 242 | 5% K NEUTRAL_02: HEX #1A1A1A | RGB 26, 26, 2…”; “01”; “DSGN DEPT”.

### 044

- Archivo: `micrographics/044.svg`
- Node ID: `113:188`
- Composición gráfica de 1080×1080 px construida con 20 vectores, 3 bloques tipográficos. Paleta detectada: #191919, #FFFAEE. Texto destacado: “Graphics Research Lab”; “REFINED_DIGITAL_ARTIFACTS KINETIC_IDENTITIES 02”; “®”.

### 045

- Archivo: `micrographics/045.svg`
- Node ID: `113:451`
- Composición gráfica de 1080×1080 px construida con 10 vectores, 5 bloques tipográficos, 1 rectángulos redondeados, 1 líneas. Paleta detectada: #191919, #FFFAEE. Texto destacado: “Graphics Research Lab”; “>>_LAYOUT”; “REFINED_DIGITAL_ARTIFACTS KINETIC_IDENTITIES”; “THE DESIGN DEPARTMENT layout, concept, PIXELS”.

### 046

- Archivo: `micrographics/046.svg`
- Node ID: `113:32`
- Composición gráfica de 1080×1080 px construida con 4 vectores, 4 bloques tipográficos, 1 elipses, 1 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE. Texto destacado: ““the design machine””; “(built in 2026)”; “26”; “GD”.

### 047

- Archivo: `micrographics/047.svg`
- Node ID: `113:93`
- Composición gráfica de 1080×1080 px construida con 3 vectores, 8 bloques tipográficos. Paleta detectada: #191919, #FFFAEE. Texto destacado: “ASSET_ID 2026_MG_990X”; “DIGITAL DESIGN LABS”; “©2026”; “/PROCESS/V01”.

### 048

- Archivo: `micrographics/048.svg`
- Node ID: `113:130`
- Composición gráfica de 1080×1080 px construida con 6 vectores, 5 bloques tipográficos. Paleta detectada: #191919, #FFFAEE. Texto destacado: “Creative Department”; “ASSET_ID 2026_MG_990X”; ““Scalable vector graphics””; “©2026”.

### 049

- Archivo: `micrographics/049.svg`
- Node ID: `113:209`
- Composición gráfica de 1080×1080 px construida con 7 bloques tipográficos. Paleta detectada: #191919, #FFFAEE. Texto destacado: “reate more”; “©”; “100%”; “40° 44′ 40″ N 73° 58′ 42″ W”.

### 050

- Archivo: `micrographics/050.svg`
- Node ID: `113:467`
- Composición gráfica de 1080×1080 px construida con 7 vectores, 7 bloques tipográficos, 1 elipses, 1 rectángulos redondeados. Paleta detectada: #191919, #FFFAEE. Texto destacado: “design labs”; “OOO5”; “E”; “20”.

## Notas de integración

Los SVG son autocontenidos: la imagen usada dentro del micrográfico 024 se embebe como data URI y el texto se exporta como paths. Los archivos raster originales también permanecen separados en `assets/images/` para reutilización directa.

Para búsquedas programáticas usa `manifest.json`; conserva el `node ID` original para poder rastrear cada asset de vuelta al documento Figma.
