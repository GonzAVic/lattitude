# Plan de posicionamiento en motores de IA (GEO/AEO)

Última actualización: 2026-08-17. **Fases 1 y 2 completas.** Ver detalle de qué se implementó en cada ítem abajo.

Objetivo: que LATTITUDE° aparezca citado o mencionado cuando alguien le pregunta a ChatGPT, Perplexity, Copilot, Gemini o similares algo como *"¿dónde tomar buen café en Mérida?"* o *"café con matcha ceremonial en Yucatán"* — además del SEO clásico que ya tiene el sitio.

## Diagnóstico: qué ya tenemos a favor

No partimos de cero. Esto ya está resuelto y no requiere trabajo adicional:

- **Sitio 100% estático (Astro)** — HTML ya renderizado, sin depender de JavaScript. La mayoría de crawlers de IA no ejecutan JS, así que esto es una ventaja real sobre sitios armados en frameworks client-side.
- **`robots.txt` no bloquea nada** — `Allow: /` para todos los user-agents, así que GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc. ya pueden leer el sitio completo.
- **JSON-LD `CafeOrCoffeeShop`** en las 7 páginas — nombre, dirección, geo, horario, Instagram. Es exactamente el tipo de dato estructurado que un LLM prefiere sobre tener que interpretar párrafos de marketing.
- **Sitemap + canonical + hreflang** bilingües correctos.
- Sitio rápido (Lighthouse Best Practices alto, sin cookies de terceros) — la velocidad de carga importa para que un crawler no abandone la página a medio render.

## Cómo se prioriza

Cada ítem tiene: **esfuerzo** (qué tan caro es), **impacto** (qué tanto mueve la aguja) y **quién actúa** (yo puedo hacerlo en código directamente, o requiere una decisión/contenido tuyo primero).

---

## Fase 1 — Quick wins ✅ completa

### 1.1 — `llms.txt` ✅
`public/llms.txt` — resumen del sitio, datos factuales (dirección, horario, coordenadas, Instagram, Maps) y links a las páginas clave (home/about, EN/ES). Nota explícita para IA: los platillos/bebidas del sitio son highlights, no un menú con precios exhaustivo — que confirmen precios directamente.

### 1.2 — Bots de IA explícitos en `robots.txt` ✅
Se agregaron bloques `Allow: /` para `GPTBot`, `ChatGPT-User`, `OAI-SearchBot`, `ClaudeBot`, `Claude-User`, `Claude-SearchBot`, `PerplexityBot`, `Perplexity-User`, `Google-Extended`, `Applebot-Extended`, `Amazonbot`, `CCBot`, `Meta-ExternalAgent` — además del wildcard `*` que ya los cubría.

### 1.3 — Enriquecer el JSON-LD existente ✅
Se agregó `paymentAccepted: "Cash, Credit Card"` y `acceptsReservations: false` al schema `CafeOrCoffeeShop` en `BaseLayout.astro`. No se agregó teléfono (decisión: no publicarlo).

---

## Fase 2 — Contenido nuevo ✅ completa

### 2.1 — Sección de FAQ + schema `FAQPage` ✅
Componente nuevo `FAQ.astro`, insertado en el home (EN/ES) después de Location, antes del footer. 8 preguntas basadas en hechos ya verificados del sitio + las respuestas que confirmaste (pagos, reservaciones): ubicación, horario, qué sirve, add-on de proteína, si es buen lugar para trabajar, reservaciones, métodos de pago, y la colaboración con LET'S RIDE. Cada página del home emite su propio `<script type="application/ld+json">` con `FAQPage` + `Question`/`acceptedAnswer` por cada item — verificado que el schema coincide 1:1 con el texto visible.

### 2.2 — Bloque de "datos rápidos" visible
**Ya estaba resuelto** — no hizo falta tocar nada. `Location.astro` ya renderiza dirección, horario, Instagram y coordenadas como texto real en el HTML (no solo en JSON-LD), y el Marquee ya lista "Coffee · Ceremonial matcha · Refreshers · Food" como texto visible.

### 2.3 — Auditoría de alt text
**Ya estaba resuelto** — revisé todas las imágenes del sitio: los `alt` ya son descriptivos y factuales ("Barista preparing specialty coffee", "Espresso being pulled next to a latte"), bilingües, y solo están vacíos (`alt=""`) en los micrográficos puramente decorativos, que es lo correcto.

---

## Fase 3 — Continuo / fuera del código del sitio

Esto no se resuelve editando el repo — es reputación externa, y es lo que más pesa cuando un motor generativo navega la web en vivo (ChatGPT con browsing, Perplexity) en vez de solo citar su propio índice.

### 3.1 — Perfil de Google Business + reseñas
**Quién actúa:** tú

Un perfil de Google Business completo y con reseñas reales es una de las señales más fuertes para IA local — Google, Perplexity y Bing lo usan como fuente de verdad para negocios físicos.

### 3.2 — Menciones en directorios/prensa locales de Mérida
**Quién actúa:** tú (yo puedo ayudar a redactar si hace falta)

Que el sitio esté citado desde afuera (TripAdvisor, blogs de Mérida, prensa) es lo que le da a un motor generativo la confianza de citarte a ti también — no confían solo en lo que un sitio dice de sí mismo.

### 3.3 — Monitoreo periódico
**Quién actúa:** tú (o yo si me pides que lo revisemos juntos cada tanto)

Cada 1-2 meses, preguntarle directamente a ChatGPT/Perplexity/Claude cosas como "mejor café en Mérida" o "dónde tomar matcha ceremonial en Yucatán" para ver si aparecen, cómo te describen, y si algún dato salió mal (para corregirlo en el JSON-LD/FAQ).

### 3.4 — Mantener los datos estructurados sincronizados con la realidad
**Quién actúa:** tú avisas cuando cambie algo

Si cambia el horario, el menú, o algo del JSON-LD deja de ser cierto, hay que actualizarlo. Un dato estructurado desactualizado que contradice reseñas reales activamente daña la confianza que un motor de IA le da al sitio.

---

## Resumen de estado

| # | Ítem | Estado |
|---|---|---|
| 1.1 | `llms.txt` | ✅ Hecho |
| 1.2 | Bots de IA explícitos en `robots.txt` | ✅ Hecho |
| 1.3 | Enriquecer JSON-LD | ✅ Hecho (pagos, reservaciones — sin teléfono por decisión) |
| 2.1 | FAQ + schema | ✅ Hecho |
| 2.2 | Datos rápidos visibles | ✅ Ya estaba resuelto |
| 2.3 | Auditoría alt text | ✅ Ya estaba resuelto |
| 3.x | Reputación externa | ⏳ Pendiente — es trabajo manual tuyo, fuera del repo (ver Fase 3) |

Todo lo que se podía resolver en código está deployado en producción. Lo único que queda del plan es la Fase 3, que no se implementa con código: perfil de Google Business, reseñas, menciones externas, y revisar cada tanto qué dicen ChatGPT/Perplexity/Claude sobre LATTITUDE°.
