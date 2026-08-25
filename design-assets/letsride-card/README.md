# Tarjeta LATTITUDE° × LET'S RIDE

Tarjeta de presentación, formato vertical (2in × 3.5in @300dpi = 600×1050px). Estilo "field ticket / boarding pass": borde negro redondeado, franja de estado, regla de ticks al pie.

También se puede ver en vivo, corriendo el sitio con `astro dev --background`, en `/design-assets/letsride-card` (ruta gitignorada, nunca se despliega — ver `.gitignore`).

- `card.html` — fuente editable (HTML/CSS autocontenido, abre directo en el navegador).
- `card-front.png` / `card-back.png` — exportados a 600×1050px.

## v3 — en español, logo en una línea

- Todo el copy (frente y reverso) está en español, sin mezcla de idiomas.
- El wordmark "LET'S RIDE" va en una sola línea (antes se partía en dos con un `<br>`), consistente con cómo se usa en el resto del sitio.
- La fila de logos (LATTITUDE × LET'S RIDE) ocupa el 100% del ancho de la tarjeta — LATTITUDE al borde izquierdo, LET'S RIDE al borde derecho — sin alterar la proporción de ninguno de los dos.
- Se quitó la metadata secundaria "ESTADO / ACTIVA" y "COMUNIDAD / EN MOVIMIENTO"; el pill "COLABORACIÓN / ACTIVA" queda solo.
- "De descuento · una bebida" dejó de ser un chip negro — ahora es texto normal en negro, mismo peso (800) que tenía en el chip.
- La tabla de términos (CANJEA / VÁLIDO HASTA / LÍMITE) se quitó; en su lugar, al fondo, va el tagline de marca "Coffee for people in motion." (en inglés, tal como vive en el resto del sitio) junto a un ícono micrográfico (`.crosshair`).
- El reverso ahora suma, debajo del QR y el mensaje de canje, la lista "LO MÁS PEDIDO EN LET'S RIDE" con las 5 bebidas de `rideDrinks` (mismo contenido que ya se muestra en `/letsride`): Dirty Horchata, Vanilla Cold Brew Latte, Mango Lychee Refresher, Protein Mocha, Cold Brew. El QR se redujo de 290px a 250px para hacerle espacio.

Se exploraron 2 tratamientos visuales alternativos (sello circular centrado, franja lateral tipo *boarding pass*) — se descartaron a favor de este diseño de ticket clásico.

## v2 — rediseño con jerarquía real

La v1 apilaba "20% / OFF / One drink" en tres líneas del mismo peso, sin distinguir protagonista de detalle. Esta v2 usa "20%" como único numeral protagonista + un sello negro "DE DESCUENTO · UNA BEBIDA", una sola línea de pulso como divisor, y una fila de términos reales del cupón (CANJEA / VÁLIDO HASTA / LÍMITE) en vez de datos decorativos sin función. QR verificado, decodifica a `lattitudecoffee.mx/letsride`.

## Nota sobre el logo de LET'S RIDE

El sitio ya usa el wordmark tipográfico en itálica bold para LET'S RIDE (no el isotipo real que se probó en `/letsride`), así que la tarjeta usa el mismo tratamiento por consistencia con el sitio en vivo — siempre en una sola línea.

## Para regenerar

Abrir `card.html` en un navegador (o re-renderizar con Playwright) tras editar copy/estilos, capturando cada `.card` (`.front` / `.back`) por separado a 600×1050px.
