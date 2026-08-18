# Plan de posicionamiento en motores de IA (GEO/AEO)

Última actualización: 2026-08-17.

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

## Fase 1 — Quick wins (esta semana)

Barato, alto impacto, no requiere contenido nuevo de tu parte.

### 1.1 — `llms.txt`
**Esfuerzo:** bajo · **Impacto:** medio-alto · **Quién actúa:** yo

Archivo en la raíz del sitio (`/llms.txt`), estilo `robots.txt` pero pensado para LLMs: un resumen en markdown de qué es LATTITUDE°, sus páginas clave y datos factuales (dirección, horario, qué sirve). Es una convención nueva (2024, propuesta por Answer.AI) — todavía no la respetan todos los motores, pero es gratis de mantener y varias herramientas de IA ya la buscan por defecto.

### 1.2 — Declarar explícitamente los bots de IA en `robots.txt`
**Esfuerzo:** muy bajo · **Impacto:** bajo (ya funciona) pero blindaje a futuro · **Quién actúa:** yo

Hoy el wildcard `User-agent: *` ya los cubre, pero nombrar explícitamente `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`, etc. con `Allow: /` dos cosas: dejar la intención inequívoca (evita que alguien agregue un `Disallow` general en el futuro y bloquee sin querer a estos bots), y varias auditorías de "AI readiness" buscan literalmente estas líneas.

### 1.3 — Enriquecer el JSON-LD existente
**Esfuerzo:** bajo · **Impacto:** medio · **Quién actúa:** yo (con 2-3 datos tuyos: teléfono si quieren publicarlo, medios de pago que aceptan, si aceptan reservaciones)

El schema `CafeOrCoffeeShop` ya existe pero está incompleto. Agregar `telephone`, `paymentAccepted`, `menu` (o `hasMenuSection` con los productos destacados que ya están en `content.ts`), y si aplica `AggregateRating` si tienen reseñas en Google. Más campos estructurados = más para que un LLM cite con precisión sin inventar.

---

## Fase 2 — Contenido nuevo (próximas 2-3 semanas)

Esto sí requiere decisiones/copy de tu parte — yo armo la estructura y el schema, pero las respuestas las das tú (o las revisamos juntos con la voz de marca).

### 2.1 — Sección de FAQ + schema `FAQPage`
**Esfuerzo:** medio · **Impacto:** alto · **Quién actúa:** tú das las preguntas/respuestas, yo lo construyo

Es el ítem de mayor impacto de todo el plan. El formato pregunta→respuesta corta y directa es literalmente lo que los "answer engines" (AEO) y los generativos (GEO) prefieren extraer y citar textualmente. Candidatas a preguntas (ajusta/agrega las que tengan sentido):

- ¿Dónde está LATTITUDE° / cómo llego?
- ¿Cuál es el horario?
- ¿Qué tipo de café sirven / de dónde es el grano?
- ¿Qué es el matcha ceremonial que ofrecen?
- ¿Tienen opciones sin lácteos / proteína / veganas?
- ¿Hay wifi / es buen lugar para trabajar?
- ¿Qué es la colaboración con LET'S RIDE?
- ¿Aceptan tarjeta / solo efectivo?

Se puede meter como sección nueva en Home o About, con `FAQPage` schema — sirve para SEO, AEO y GEO al mismo tiempo.

### 2.2 — Bloque de "datos rápidos" visible (no solo en JSON-LD)
**Esfuerzo:** bajo-medio · **Impacto:** medio · **Quién actúa:** yo

Los crawlers de IA le dan más peso a un dato cuando aparece tanto en texto visible como en structured data (se refuerzan mutuamente, reduce la chance de que el LLM "alucine" un dato distinto). Hoy toda la dirección/horario vive solo en el JSON-LD, invisible en el HTML renderizado. Agregar una franja compacta (dirección, horario, qué sirven) en la sección de ubicación del home, en el mismo lenguaje de coordenadas/monospace que ya usa el sitio — no rompe la voz de marca, la complementa.

### 2.3 — Auditoría de alt text
**Esfuerzo:** bajo · **Impacto:** bajo-medio · **Quién actúa:** yo

Revisar que las imágenes tengan `alt` descriptivo y factual (no solo decorativo) donde aporte contexto real — ej. "Barra de café con matcha ceremonial preparado" en vez de vacío. Ayuda accesibilidad y le da al crawler más contexto textual sobre qué se ve en la imagen.

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

## Resumen de prioridad

| # | Ítem | Esfuerzo | Impacto | Bloqueado por |
|---|---|---|---|---|
| 1.1 | `llms.txt` | Bajo | Medio-alto | Nada — listo para implementar |
| 1.2 | Bots de IA explícitos en `robots.txt` | Muy bajo | Bajo (blindaje) | Nada |
| 1.3 | Enriquecer JSON-LD | Bajo | Medio | 2-3 datos tuyos (teléfono, pagos, reservaciones) |
| 2.1 | FAQ + schema | Medio | **Alto** | Preguntas/respuestas tuyas |
| 2.2 | Datos rápidos visibles | Bajo-medio | Medio | Nada |
| 2.3 | Auditoría alt text | Bajo | Bajo-medio | Nada |
| 3.x | Reputación externa | — | Alto (a largo plazo) | Es trabajo tuyo, fuera del repo |

**Recomendación de orden:** arrancar por 1.1 + 1.2 (se hacen en minutos, sin pedirte nada), después 1.3 si me pasas los 2-3 datos que faltan, y en paralelo ir armando las preguntas del FAQ (2.1) porque es lo de mayor impacto real — todo lo demás es refuerzo.
