export type Locale = "en" | "es";
export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "es";

export function otherLocale(lang: Locale): Locale {
  return lang === "en" ? "es" : "en";
}

/** Prefix for locale-aware absolute paths. Spanish lives at "/", English at "/en/". */
export function localePath(lang: Locale, path: string = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return lang === "es" ? clean : `/en${clean}`;
}

export const site = {
  en: {
    title: "Lattitude Coffee — Specialty coffee shop in Mérida, Yucatán",
    description:
      "Specialty coffee shop in Paraíso Maya, Mérida. Coffee, ceremonial matcha, cold brew and food made with natural ingredients — and a good space to work. Open Mon–Sat.",
    ogAlt: "Lattitude Coffee — Specialty coffee shop in Mérida, Yucatán",
  },
  es: {
    title: "Lattitude Coffee | Cafetería de especialidad en Mérida, Yucatán",
    description:
      "Cafetería de especialidad en Paraíso Maya, Mérida. Café, matcha ceremonial, cold brew y comida con ingredientes naturales — y un buen espacio para trabajar. Abierto Lun–Sáb.",
    ogAlt: "Lattitude Coffee — Cafetería de especialidad en Mérida, Yucatán",
  },
} as const;

export const nav = {
  en: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    concept: "Concept",
    drinks: "Drinks",
    people: "People",
    communities: "Communities",
    visit: "Visit",
    about: "About",
    currentPosition: "Current position",
    hours: "Mon–Fri / 09:00–21:00 · Sat / 10:00–18:00",
    instagram: "@lattitudecoffee",
    switchTo: "ES",
    switchAria: "Switch to Spanish",
  },
  es: {
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    concept: "Concepto",
    drinks: "Bebidas",
    people: "Gente",
    communities: "Comunidades",
    visit: "Visítanos",
    about: "Nosotros",
    currentPosition: "Posición actual",
    hours: "Lun–Vie / 09:00–21:00 · Sáb / 10:00–18:00",
    instagram: "@lattitudecoffee",
    switchTo: "EN",
    switchAria: "Switch to English",
  },
} as const;

export const hero = {
  en: {
    hours: "Mon–Fri / 09:00–21:00 · Sat / 10:00–18:00",
    subhead: "Coffee for people in motion.",
    directions: "Get directions",
    explore: "Explore drinks",
  },
  es: {
    hours: "Lun–Vie / 09:00–21:00 · Sáb / 10:00–18:00",
    subhead: "Café para gente en movimiento.",
    directions: "Cómo llegar",
    explore: "Ver bebidas",
  },
} as const;

export const marqueeCards = {
  en: [
    { variant: "a", img: "/images/marquee-overhead-duo.webp", alt: "Overhead shot of a latte with leaf art and an iced coffee to go, a hand's shadow crossing the pavement", label: "Coffee / Craft" },
    { variant: "b", img: "/images/marquee-plant-cup.webp", alt: "Lattitude Coffee to-go cup tucked into green plant leaves", label: "Natural / Ingredients" },
    { variant: "c", img: "/images/marquee-two-cups.webp", alt: "Two Lattitude Coffee cups on a table, a latte with heart art next to a to-go cup", label: "Movement / To go" },
    { variant: "d", img: "/images/marquee-cookie-hand.webp", alt: "Hand holding a chocolate chip cookie against a green ribbed wall", label: "Food / Sweet" },
  ],
  es: [
    { variant: "a", img: "/images/marquee-overhead-duo.webp", alt: "Toma cenital de un latte con arte y un café helado para llevar, con la sombra de una mano sobre el pavimento", label: "Café / Oficio" },
    { variant: "b", img: "/images/marquee-plant-cup.webp", alt: "Vaso de Lattitude Coffee para llevar entre hojas de una planta verde", label: "Natural / Ingredientes" },
    { variant: "c", img: "/images/marquee-two-cups.webp", alt: "Dos vasos de Lattitude Coffee sobre una mesa, un latte con arte de corazón junto a un vaso para llevar", label: "Movimiento / Para llevar" },
    { variant: "d", img: "/images/marquee-cookie-hand.webp", alt: "Mano sosteniendo una galleta con chispas de chocolate contra una pared verde acanalada", label: "Comida / Dulce" },
  ],
} as const;

export const marquee = {
  en: { eyebrow: "Coffee · Ceremonial matcha · Refreshers · Food", hint: "Drag to explore / Pause on hover" },
  es: { eyebrow: "Café · Matcha ceremonial · Refrescos · Comida", hint: "Arrastra para explorar / Pausa al pasar el cursor" },
} as const;

export const intent = {
  en: { heading: "Made for real life." },
  es: { heading: "Hecho para la vida real." },
} as const;

export const intentStories = {
  en: [
    { img: "/images/trabajar-en-lattitude-cafe-especialidad.webp", alt: "Person working on a laptop at Lattitude Coffee, with a coffee, a water bottle and a slice of cake on the table", label: "Table / Useful", title: "A place to get something done.", body: "Come with a laptop, a conversation or a half-finished idea. Stay comfortable. Keep moving." },
    { img: "/images/barista-lattitude-cafe-especialidad.webp", alt: "Lattitude Coffee barista pulling a shot of specialty coffee with a brass milk pitcher", label: "Detail / Matters", title: "Good coffee without the theater.", body: "We care about quality, balance and the details that make a drink worth coming back for." },
    { img: "/images/cafe-de-especialidad-para-llevar.webp", alt: "Specialty coffee to go in a minimalist white cup", label: "Simple / Useful", title: "Ingredients with a reason.", body: "Natural ingredients first. Sugar-free options where they make sense—not just because a trend told us to." },
    { img: "/images/personas-brindando-cafe-lattitude.webp", alt: "Three people toasting with latte-art flat whites and a cold brew at Lattitude Coffee", label: "Meet / Share", title: "More than a table and a cup.", body: "Workdays, meetups, workshops and moments that put the right people in the same room." },
  ],
  es: [
    { img: "/images/trabajar-en-lattitude-cafe-especialidad.webp", alt: "Persona trabajando en una laptop en Lattitude Coffee, con un café, un termo y una rebanada de pastel sobre la mesa", label: "Mesa / Útil", title: "Un lugar para sacar las cosas adelante.", body: "Ven con una laptop, una conversación o una idea a medias. Ponte cómodo. Sigue en movimiento." },
    { img: "/images/barista-lattitude-cafe-especialidad.webp", alt: "Barista de Lattitude Coffee preparando un café de especialidad con una jarra de latón", label: "Detalle / Importa", title: "Buen café sin tanto show.", body: "Nos importa la calidad, el balance y los detalles que hacen que una bebida valga la pena repetir." },
    { img: "/images/cafe-de-especialidad-para-llevar.webp", alt: "Café de especialidad para llevar en un vaso blanco minimalista", label: "Simple / Útil", title: "Ingredientes con una razón.", body: "Ingredientes naturales primero. Opciones sin azúcar donde tienen sentido — no solo porque una tendencia lo diga." },
    { img: "/images/personas-brindando-cafe-lattitude.webp", alt: "Tres personas brindando con flat whites de arte latte y un cold brew en Lattitude Coffee", label: "Reunirse / Compartir", title: "Más que una mesa y una taza.", body: "Días de trabajo, meetups, talleres y momentos que reúnen a las personas correctas en el mismo lugar." },
  ],
} as const;

export const drinksSection = {
  en: { eyebrow: "Featured at Lattitude Coffee", heading: "What people order the most.", body: "Coffee leads the menu. Matcha brings a different rhythm. Food keeps the day moving." },
  es: { eyebrow: "Destacado en Lattitude Coffee", heading: "Lo que la gente más pide.", body: "El café lidera el menú. El matcha trae otro ritmo. La comida mantiene el día en movimiento." },
} as const;

export const drinksList = {
  en: [
    { img: "/images/dirty-horchata.webp", alt: "Dirty Horchata drink", name: "Dirty Horchata", coord: "ESPRESSO / MATCHA / HORCHATA", tag: "Signature / Movement", icon: "crosshair" },
    { img: "/images/vanilla-coldbrew-latte.webp", alt: "Vanilla Cold Brew Latte drink", name: "Vanilla Cold Brew Latte", coord: "COLD BREW / VANILLA / MILK", tag: "Coffee / Cold", icon: "star" },
    { img: "/images/flat-white.webp", alt: "Flat White drink", name: "Flat White", coord: "ESPRESSO / STEAMED MILK", tag: "Coffee / Classic", icon: "crosshair" },
    { img: "/images/mango-lychee-refresher.webp", alt: "Mango Lychee Refresher drink", name: "Mango Lychee Refresher", coord: "MANGO / LYCHEE / SODA", tag: "No coffee / Bright", icon: "star" },
    { img: "/images/personas-brindando-cafe-lattitude.webp", alt: "Coffees being shared over a table at Lattitude Coffee", name: "Grilled Cheese", coord: "BREAD / CHEESE / BUTTER", tag: "Food / Comfort", icon: "crosshair" },
  ],
  es: [
    { img: "/images/dirty-horchata.webp", alt: "Bebida Dirty Horchata", name: "Dirty Horchata", coord: "ESPRESSO / MATCHA / HORCHATA", tag: "Firma / Movimiento", icon: "crosshair" },
    { img: "/images/vanilla-coldbrew-latte.webp", alt: "Bebida Vanilla Cold Brew Latte", name: "Vanilla Cold Brew Latte", coord: "COLD BREW / VAINILLA / LECHE", tag: "Café / Frío", icon: "star" },
    { img: "/images/flat-white.webp", alt: "Bebida Flat White", name: "Flat White", coord: "ESPRESSO / LECHE VAPORIZADA", tag: "Café / Clásico", icon: "crosshair" },
    { img: "/images/mango-lychee-refresher.webp", alt: "Bebida Mango Lychee Refresher", name: "Mango Lychee Refresher", coord: "MANGO / LYCHEE / SODA", tag: "Sin café / Fresco", icon: "star" },
    { img: "/images/personas-brindando-cafe-lattitude.webp", alt: "Cafés compartidos sobre una mesa en Lattitude Coffee", name: "Grilled Cheese", coord: "PAN / QUESO / MANTEQUILLA", tag: "Comida / Confort", icon: "crosshair" },
  ],
} as const;

export const statement = {
  en: {
    eyebrow: "The idea behind Lattitude Coffee",
    heading: "Nothing here is here by accident.",
    body: "The space, the drinks and the small decisions around them are designed with a reason. A table you can actually work from. Power when you need it. Good internet. Natural ingredients. Coffee worth leaving the house for.",
    micrographic: "Nothing by accident",
  },
  es: {
    eyebrow: "La idea detrás de Lattitude Coffee",
    heading: "Nada aquí está por accidente.",
    body: "El espacio, las bebidas y las pequeñas decisiones detrás de ellas están diseñadas con una razón. Una mesa desde la que realmente puedes trabajar. Contactos cuando los necesitas. Buen internet. Ingredientes naturales. Café que vale la pena salir de casa a buscar.",
    micrographic: "Nada por accidente",
  },
} as const;

export const lab = {
  en: {
    eyebrow: "LATTITUDE LAB / Rotation",
    heading: "Keep the coordinates moving.",
    note: "A place for seasonal drinks, tests and combinations that earn a place on the menu. This section can change without changing the whole site.",
  },
  es: {
    eyebrow: "LATTITUDE LAB / Rotación",
    heading: "Mantén las coordenadas en movimiento.",
    note: "Un espacio para bebidas de temporada, pruebas y combinaciones que se ganan un lugar en el menú. Esta sección puede cambiar sin cambiar todo el sitio.",
  },
} as const;

export const labRows = {
  en: [
    { title: "Citrus Flat White", tag: "Coffee / Bright", icon: "crosshair" },
    { title: "Mango Lychee Flat White", tag: "Coffee / Experiment", icon: "star" },
    { title: "Protein Mocha", tag: "Coffee / In motion", icon: "crosshair" },
    { title: "Seasonal coordinate", tag: "Changes with the rotation", icon: "arrow" },
  ],
  es: [
    { title: "Citrus Flat White", tag: "Café / Fresco", icon: "crosshair" },
    { title: "Mango Lychee Flat White", tag: "Café / Experimento", icon: "star" },
    { title: "Protein Mocha", tag: "Café / En movimiento", icon: "crosshair" },
    { title: "Coordenada de temporada", tag: "Cambia con la rotación", icon: "arrow" },
  ],
} as const;

export const people = {
  en: {
    alt: "Friends toasting with latte-art coffees and a cold brew at Lattitude Coffee",
    pill: "ROOM / ACTIVE",
    heading: "Built for people building things.",
    body: "You do not need a job title to belong here. Bring the laptop. Meet someone. Start something. Finish something. Stay for another coffee.",
    tags: ["Work", "Meetups", "Workshops", "Creatives", "Builders", "People with projects"],
    arrive: "Arrive",
    leave: "Leave motivated",
  },
  es: {
    alt: "Amigos brindando con cafés de arte latte y un cold brew en Lattitude Coffee",
    pill: "SALA / ACTIVA",
    heading: "Hecho para gente que construye cosas.",
    body: "No necesitas un puesto de trabajo para pertenecer aquí. Trae la laptop. Conoce a alguien. Empieza algo. Termina algo. Quédate por otro café.",
    tags: ["Trabajo", "Encuentros", "Talleres", "Creativos", "Constructores", "Gente con proyectos"],
    arrive: "Llega",
    leave: "Sal motivado",
  },
} as const;

export const location = {
  en: {
    eyebrow: "Current position / Mérida",
    heading: "Find your way here.",
    addressLabel: "Address",
    address: "Paraiso Maya · Calle 16 A, between 15 A and 15 B · Mérida, Yucatán",
    phoneLabel: "Phone",
    phone: "+52 999 955 6212",
    hoursLabel: "Hours",
    hoursWeekday: "Monday–Friday · 9:00 AM–9:00 PM",
    hoursSaturday: "Saturday · 10:00 AM–6:00 PM",
    instagramLabel: "Instagram",
    googleMaps: "Google Maps",
    instagram: "Instagram",
    mapTitle: "Map showing Lattitude Coffee in Paraíso Maya, Mérida, Yucatán",
    coordEyebrow: "Lattitude Coffee / Exact coordinates",
  },
  es: {
    eyebrow: "Posición actual / Mérida",
    heading: "Encuentra tu camino aquí.",
    addressLabel: "Dirección",
    address: "Paraíso Maya · Calle 16 A, entre 15 A y 15 B · Mérida, Yucatán",
    phoneLabel: "Teléfono",
    phone: "+52 999 955 6212",
    hoursLabel: "Horario",
    hoursWeekday: "Lunes–Viernes · 9:00 AM–9:00 PM",
    hoursSaturday: "Sábado · 10:00 AM–6:00 PM",
    instagramLabel: "Instagram",
    googleMaps: "Google Maps",
    instagram: "Instagram",
    mapTitle: "Mapa con la ubicación de Lattitude Coffee en Paraíso Maya, Mérida, Yucatán",
    coordEyebrow: "Lattitude Coffee / Coordenadas exactas",
  },
} as const;

export const neighborhood = {
  en: {
    eyebrow: "The area / Paraíso Maya",
    heading: "In the north of Mérida, inside Paraíso Maya.",
    body: [
      "Lattitude Coffee is on Calle 16 A, between 15 A and 15 B, inside Paraíso Maya in the north of Mérida — a calm, residential pocket right off the Periférico and easy to reach by car from the north side of the city.",
      "There is street parking out front. Coming by rideshare? Set the destination to “Lattitude Coffee, Paraíso Maya.” We're open Monday to Friday 9:00 AM–9:00 PM and Saturday 10:00 AM–6:00 PM — no reservation, just walk in.",
    ],
  },
  es: {
    eyebrow: "La zona / Paraíso Maya",
    heading: "En el norte de Mérida, dentro de Paraíso Maya.",
    body: [
      "Lattitude Coffee está en Calle 16 A, entre 15 A y 15 B, dentro de Paraíso Maya, en el norte de Mérida — una zona residencial y tranquila, a un lado del Periférico y fácil de alcanzar en coche desde el norte de la ciudad.",
      "Puedes estacionarte sobre la calle. ¿Llegas en aplicación de transporte? Marca como destino «Lattitude Coffee, Paraíso Maya». Abrimos de lunes a viernes de 9:00 a 21:00 y los sábados de 10:00 a 18:00 — sin reservación, solo llega.",
    ],
  },
} as const;

export const faq = {
  en: {
    eyebrow: "Questions / Answered",
    heading: "Before you come by.",
    items: [
      {
        q: "Where is Lattitude Coffee?",
        a: "Paraiso Maya · Calle 16 A, between 15 A and 15 B · Mérida, Yucatán.",
      },
      {
        q: "What are your hours?",
        a: "Monday–Friday, 9:00 AM–9:00 PM. Saturday, 10:00 AM–6:00 PM.",
      },
      {
        q: "What does Lattitude Coffee serve?",
        a: "Specialty coffee, ceremonial matcha, cold brew, refreshers and food — natural ingredients first.",
      },
      {
        q: "Can I add protein to my drink?",
        a: "Yes. Natural, unflavored protein you can add to any drink on the menu — no fitness-shake taste, no upsell talk. Just ask at the counter.",
      },
      {
        q: "Is Lattitude Coffee good for working?",
        a: "Yes. Come with a laptop, a conversation or a half-finished idea. The space is built to stay comfortable while you get things done.",
      },
      {
        q: "Do you take reservations?",
        a: "No — Lattitude Coffee is walk-in only.",
      },
      {
        q: "What payment methods do you accept?",
        a: "Cash and card.",
      },
      {
        q: "What is Lattitude Coffee × LET'S RIDE?",
        a: "An ongoing collaboration with the LET'S RIDE cycling community — coffee, ceremonial matcha and food for people who don't sit still.",
      },
      {
        q: "What is Lattitude Coffee × Vatten?",
        a: "An ongoing collaboration with Vatten Terapia Física, a physiotherapy and rehabilitation clinic in Mérida — coffee and food to recover on, after therapy.",
      },
    ],
  },
  es: {
    eyebrow: "Preguntas / Respondidas",
    heading: "Antes de venir.",
    items: [
      {
        q: "¿Dónde está Lattitude Coffee?",
        a: "Paraíso Maya · Calle 16 A, entre 15 A y 15 B · Mérida, Yucatán.",
      },
      {
        q: "¿Cuál es el horario?",
        a: "Lunes–Viernes, 9:00 AM–9:00 PM. Sábado, 10:00 AM–6:00 PM.",
      },
      {
        q: "¿Qué sirve Lattitude Coffee?",
        a: "Café de especialidad, matcha ceremonial, cold brew, refrescos y comida — ingredientes naturales primero.",
      },
      {
        q: "¿Puedo agregar proteína a mi bebida?",
        a: "Sí. Proteína natural, sin sabor, que puedes agregar a cualquier bebida del menú — sin sabor a shake fitness, sin venta forzada. Solo pregunta en la barra.",
      },
      {
        q: "¿Es buen lugar para trabajar?",
        a: "Sí. Ven con una laptop, una conversación o una idea a medias. El espacio está pensado para que te quedes cómodo mientras avanzas.",
      },
      {
        q: "¿Aceptan reservaciones?",
        a: "No — Lattitude Coffee es solo walk-in.",
      },
      {
        q: "¿Qué métodos de pago aceptan?",
        a: "Efectivo y tarjeta.",
      },
      {
        q: "¿Qué es Lattitude Coffee × LET'S RIDE?",
        a: "Una colaboración activa con la comunidad ciclista LET'S RIDE — café, matcha ceremonial y comida para gente que no se queda quieta.",
      },
      {
        q: "¿Qué es Lattitude Coffee × Vatten?",
        a: "Una colaboración activa con Vatten Terapia Física, una clínica de fisioterapia y rehabilitación en Mérida — café y comida para reponerte, después de terapia.",
      },
    ],
  },
} as const;

export const footer = {
  en: {
    copy: "A coffee shop for people in motion. Good coffee, ceremonial matcha, useful space and a point of view. Made with intention in Mérida, Yucatán.",
    exploreLabel: "Explore",
    concept: "Concept",
    drinks: "Drinks",
    people: "People",
    communities: "Communities",
    visit: "Visit",
    about: "About",
    connectLabel: "Connect",
    instagram: "Instagram",
    googleMaps: "Google Maps",
    pill: "NOTHING BY ACCIDENT",
    madeWith: "Made with intention.",
  },
  es: {
    copy: "Una cafetería para gente en movimiento. Buen café, matcha ceremonial, espacio útil y un punto de vista. Hecho con intención en Mérida, Yucatán.",
    exploreLabel: "Explorar",
    concept: "Concepto",
    drinks: "Bebidas",
    people: "Gente",
    communities: "Comunidades",
    visit: "Visítanos",
    about: "Nosotros",
    connectLabel: "Conecta",
    instagram: "Instagram",
    googleMaps: "Google Maps",
    pill: "NADA POR ACCIDENTE",
    madeWith: "Hecho con intención.",
  },
} as const;

export const foundersSeo = {
  en: {
    title: "About Lattitude Coffee — Specialty coffee shop in Mérida",
    description: "The story and intention behind Lattitude Coffee, a specialty coffee shop in Paraíso Maya, Mérida — good coffee, useful design and details that have a reason to exist.",
  },
  es: {
    title: "Nosotros — Lattitude Coffee · Cafetería de especialidad en Mérida",
    description: "La historia y la intención detrás de Lattitude Coffee, una cafetería de especialidad en Paraíso Maya, Mérida — buen café, diseño útil y detalles con una razón de ser.",
  },
} as const;

export const foundersHero = {
  en: {
    eyebrow: "PEOPLE / IN MOTION",
    heading: "Built in motion.",
    subhead: "Lattitude Coffee is a coffee shop for people who are building something — a table to work from, a coffee worth the trip, a place that gets the details right.",
    micro: ["STATUS / OPEN", "DIRECTION / FORWARD", "MADE WITH / INTENTION", "CURRENT POSITION / MÉRIDA"],
  },
  es: {
    eyebrow: "GENTE / EN MOVIMIENTO",
    heading: "Construido en movimiento.",
    subhead: "Lattitude Coffee es una cafetería para gente que está construyendo algo — una mesa desde donde trabajar, un café que valga la pena, un lugar que entiende los detalles.",
    micro: ["ESTADO / ABIERTO", "DIRECCIÓN / ADELANTE", "HECHO CON / INTENCIÓN", "POSICIÓN ACTUAL / MÉRIDA"],
  },
} as const;

export const foundersCommunity = {
  en: {
    eyebrow: "WHO THIS IS FOR",
    heading: "The people who show up are the point.",
    body: [
      "Entrepreneurs. Creatives. Students. Dancers between rehearsals. People passing through. Different jobs, similar momentum.",
      "Lattitude Coffee was built around the people who actually use it — not around an idea of what a coffee shop should look like.",
    ],
    micro: ["WORK MODE / ON", "ROOM / ACTIVE", "PEOPLE / BUILDING", "MOVEMENT / CONTINUOUS"],
  },
  es: {
    eyebrow: "PARA QUIÉN ES ESTO",
    heading: "La gente que llega es el punto.",
    body: [
      "Emprendedores. Creativos. Estudiantes. Bailarines entre ensayos. Gente de paso. Trabajos distintos, el mismo impulso.",
      "Lattitude Coffee se construyó alrededor de la gente que realmente lo usa — no alrededor de una idea de cómo debería verse una cafetería.",
    ],
    micro: ["MODO TRABAJO / ON", "SALA / ACTIVA", "GENTE / CONSTRUYENDO", "MOVIMIENTO / CONTINUO"],
  },
} as const;

export const foundersName = {
  en: {
    eyebrow: "ORIGIN / LATTE",
    heading: ["It started with latte.", "Then it went somewhere else."],
    body: "The name started as a word experiment around latte. LATTITUDE opened a much bigger idea: coordinates, places, movement, and the cultures we encounter along the way. Degrees, minutes and seconds became part of the visual language of the brand — not just as location data, but as a way to hide timing, recipes, movement and small pieces of information in plain sight.",
    micro: ["ORIGIN / LATTE", "POSITION / LATTITUDE", "DIRECTION / FORWARD", "CURRENT POSITION / MÉRIDA"],
  },
  es: {
    eyebrow: "ORIGEN / LATTE",
    heading: ["Empezó con latte.", "Después fue a otro lado."],
    body: "El nombre empezó como un experimento de palabras alrededor de latte. LATTITUDE abrió una idea mucho más grande: coordenadas, lugares, movimiento y las culturas que encontramos en el camino. Grados, minutos y segundos se volvieron parte del lenguaje visual de la marca — no solo como datos de ubicación, sino como una forma de esconder tiempos, recetas, movimiento y pequeñas piezas de información a plena vista.",
    micro: ["ORIGEN / LATTE", "POSICIÓN / LATTITUDE", "DIRECCIÓN / ADELANTE", "POSICIÓN ACTUAL / MÉRIDA"],
  },
} as const;

export const foundersOrigin = {
  en: {
    eyebrow: "HOW IT STARTED",
    heading: "Two people. No shortcuts.",
    body: "Lattitude Coffee started with two people who loved coffee before they knew how to make it well. They learned with help from a barista friend, one question at a time — and paid attention to everything else along the way: how spaces feel, how rhythm works, how small decisions add up. None of that is the interesting part. What happens here is.",
  },
  es: {
    eyebrow: "CÓMO EMPEZÓ",
    heading: "Dos personas. Sin atajos.",
    body: "Lattitude Coffee empezó con dos personas que amaban el café antes de saber prepararlo bien. Aprendieron con la ayuda de un amigo barista, una pregunta a la vez — y pusieron atención a todo lo demás en el camino: cómo se sienten los espacios, cómo funciona el ritmo, cómo se suman las pequeñas decisiones. Esa no es la parte interesante. Lo que pasa aquí, sí.",
  },
} as const;

export const foundersIntention = {
  en: {
    eyebrow: "MADE WITH INTENTION",
    heading: "The details should have a reason to exist.",
    body: [
      "A table should be comfortable because someone might work from it for hours. An outlet should be where you need it. The internet should work. The ingredients should make sense.",
      "That is not a campaign line. It is the filter behind every decision — so the time you spend here works a little better than the time before it.",
    ],
    img: "/images/barista-lattitude-cafe-especialidad.webp",
    alt: "Lattitude Coffee barista preparing specialty coffee at the espresso machine",
    micro: ["STANDARD / RISING", "STATUS / READY", "QUALITY / STANDARD", "SIGNAL / CLEAR"],
  },
  es: {
    eyebrow: "HECHO CON INTENCIÓN",
    heading: "Los detalles deben tener una razón para existir.",
    body: [
      "Una mesa debe ser cómoda porque alguien podría trabajar desde ahí por horas. Un contacto debe estar donde lo necesitas. El internet debe funcionar. Los ingredientes deben tener sentido.",
      "Eso no es una frase de campaña. Es el filtro detrás de cada decisión — para que el tiempo que pasas aquí funcione un poco mejor que el de antes.",
    ],
    img: "/images/barista-lattitude-cafe-especialidad.webp",
    alt: "Barista de Lattitude Coffee preparando café de especialidad en la máquina de espresso",
    micro: ["ESTÁNDAR / SUBIENDO", "ESTADO / LISTO", "CALIDAD / ESTÁNDAR", "SEÑAL / CLARA"],
  },
} as const;

export const foundersClosing = {
  en: {
    eyebrow: "CURRENT POSITION / MÉRIDA",
    heading: ["This isn't about where we've been.", "It's about where you're headed next."],
    supporting: "Coffee for people in motion. Made with intention in Mérida, Yucatán.",
    ctaVisit: "Visit Lattitude Coffee",
    ctaPopular: "See what people order most",
  },
  es: {
    eyebrow: "POSICIÓN ACTUAL / MÉRIDA",
    heading: ["Esto no se trata de dónde hemos estado.", "Se trata de hacia dónde vas tú ahora."],
    supporting: "Café para gente en movimiento. Hecho con intención en Mérida, Yucatán.",
    ctaVisit: "Visitar Lattitude Coffee",
    ctaPopular: "Ver lo que más se pide",
  },
} as const;

/* Community partner page — LET'S RIDE. Linked from the Communities hub. */
export const rideSeo = {
  en: {
    title: "Lattitude Coffee × LET'S RIDE",
    description: "Coffee, ceremonial matcha and food for the LET'S RIDE community — made for people who don't sit still.",
  },
  es: {
    title: "Lattitude Coffee × LET'S RIDE",
    description: "Café, matcha ceremonial y comida para la comunidad de LET'S RIDE — hecho para quienes no se quedan quietos.",
  },
} as const;

export const rideHero = {
  en: {
    eyebrow: "Lattitude Coffee × LET'S RIDE",
    heading: "Class ends. The rhythm doesn't.",
    subhead: "LET'S RIDE gets your legs moving to the beat. Lattitude Coffee keeps it going after — coffee, ceremonial matcha and food made for people who don't sit still.",
    micro: ["RHYTHM / CONTINUOUS", "STATUS / OPEN", "DIRECTION / FORWARD", "MOVEMENT / SHARED"],
    ctaFavorites: "See favorite drinks",
  },
  es: {
    eyebrow: "Lattitude Coffee × LET'S RIDE",
    heading: "La clase termina. El ritmo no.",
    subhead: "LET'S RIDE pone tus piernas en movimiento al ritmo de la clase. Lattitude Coffee lo sigue después — café, matcha ceremonial y comida para quienes no se quedan quietos.",
    micro: ["RITMO / CONTINUO", "ESTADO / ABIERTO", "DIRECCIÓN / ADELANTE", "MOVIMIENTO / COMPARTIDO"],
    ctaFavorites: "Ver bebidas favoritas",
  },
} as const;

export const rideDrinksSection = {
  en: {
    eyebrow: "LOVED BY THIS COMMUNITY",
    heading: "What the LET'S RIDE crowd orders most.",
    body: "No ranking, no guesswork — just what keeps showing up on the counter after class.",
  },
  es: {
    eyebrow: "AMADAS POR ESTA COMUNIDAD",
    heading: "Lo que más pide la comunidad de LET'S RIDE.",
    body: "Sin ranking ni adivinanzas — solo lo que sigue apareciendo en la barra después de clase.",
  },
} as const;

export const rideDrinks = {
  en: [
    { img: "/images/orange-tonic.webp", alt: "Orange Tonic drink", name: "Orange Tonic", coord: "ORANGE / TONIC / SODA", tag: "No coffee / Bright", icon: "star" },
    { img: "/images/vanilla-coldbrew-latte.webp", alt: "Vanilla Cold Brew Latte drink", name: "Vanilla Cold Brew Latte", coord: "COLD BREW / VANILLA / MILK", tag: "Coffee / Cold", icon: "star" },
    { img: "/images/mango-lychee-refresher.webp", alt: "Mango Lychee Refresher drink", name: "Mango Lychee Refresher", coord: "MANGO / LYCHEE / SODA", tag: "No coffee / Bright", icon: "star" },
    { img: "/images/protein-mocha.webp", alt: "Protein Mocha drink", name: "Protein Mocha", coord: "ESPRESSO / COCOA / PROTEIN", tag: "Coffee / Fuel", icon: "plus" },
    { img: "/images/matcha-horchata.webp", alt: "Matcha Horchata drink", name: "Matcha Horchata", coord: "MATCHA / HORCHATA / MILK", tag: "No coffee / Signature", icon: "crosshair" },
  ],
  es: [
    { img: "/images/orange-tonic.webp", alt: "Bebida Orange Tonic", name: "Orange Tonic", coord: "NARANJA / TÓNICA / SODA", tag: "Sin café / Fresco", icon: "star" },
    { img: "/images/vanilla-coldbrew-latte.webp", alt: "Bebida Vanilla Cold Brew Latte", name: "Vanilla Cold Brew Latte", coord: "COLD BREW / VAINILLA / LECHE", tag: "Café / Frío", icon: "star" },
    { img: "/images/mango-lychee-refresher.webp", alt: "Bebida Mango Lychee Refresher", name: "Mango Lychee Refresher", coord: "MANGO / LYCHEE / SODA", tag: "Sin café / Fresco", icon: "star" },
    { img: "/images/protein-mocha.webp", alt: "Bebida Protein Mocha", name: "Protein Mocha", coord: "ESPRESSO / CACAO / PROTEÍNA", tag: "Café / Energía", icon: "plus" },
    { img: "/images/matcha-horchata.webp", alt: "Bebida Matcha Horchata", name: "Matcha Horchata", coord: "MATCHA / HORCHATA / LECHE", tag: "Sin café / Firma", icon: "crosshair" },
  ],
} as const;

export const rideProtein = {
  en: {
    eyebrow: "ADD-ON / AVAILABLE",
    heading: "Protein, if you want it.",
    body: "Natural, unflavored protein you can add to any drink on this menu — no fitness-shake taste, no upsell talk. Just ask at the counter.",
  },
  es: {
    eyebrow: "EXTRA / DISPONIBLE",
    heading: "Proteína, si la quieres.",
    body: "Proteína natural, sin sabor, que puedes agregar a cualquier bebida del menú — sin sabor a shake, sin discurso de venta. Solo pídela en la barra.",
  },
} as const;

export const rideClosing = {
  en: {
    heading: "Ride day. Coffee day.",
    supporting: "Bring the whole class. Rhythm's better shared.",
    ctaDirections: "Get directions",
    ctaPopular: "See what people order most",
  },
  es: {
    heading: "Día de ride. Día de café.",
    supporting: "Trae a toda la clase. El ritmo se disfruta más en grupo.",
    ctaDirections: "Cómo llegar",
    ctaPopular: "Ver lo que más se pide",
  },
} as const;

/* Community partner page — VATTEN (physical therapy & rehab). Linked from the Communities hub. */
export const vattenSeo = {
  en: {
    title: "Lattitude Coffee × Vatten",
    description: "Coffee and food for the Vatten Terapia Física community in Mérida — made for people recovering, rebuilding and getting back in motion.",
  },
  es: {
    title: "Lattitude Coffee × Vatten",
    description: "Café y comida para la comunidad de Vatten Terapia Física en Mérida — hecho para quienes se recuperan, se reconstruyen y vuelven al movimiento.",
  },
} as const;

export const vattenHero = {
  en: {
    eyebrow: "Lattitude Coffee × Vatten",
    heading: "Therapy ends. Recovery keeps going.",
    subhead: "Vatten Terapia Física works on physiotherapy, rehabilitation and prevention across Mérida. Lattitude Coffee is where the recovery continues — good coffee, natural ingredients and a place to sit still for once.",
    micro: ["RECOVERY / CONTINUOUS", "STATUS / OPEN", "DIRECTION / FORWARD", "MOVEMENT / SHARED"],
    ctaFavorites: "See favorite drinks",
  },
  es: {
    eyebrow: "Lattitude Coffee × Vatten",
    heading: "La terapia termina. La recuperación sigue.",
    subhead: "Vatten Terapia Física trabaja fisioterapia, rehabilitación y prevención en Mérida. Lattitude Coffee es donde sigue la recuperación — buen café, ingredientes naturales y un lugar para quedarte quieto, por una vez.",
    micro: ["RECUPERACIÓN / CONTINUA", "ESTADO / ABIERTO", "DIRECCIÓN / ADELANTE", "MOVIMIENTO / COMPARTIDO"],
    ctaFavorites: "Ver bebidas favoritas",
  },
} as const;

export const vattenDrinksSection = {
  en: {
    eyebrow: "GOOD AFTER A SESSION",
    heading: "What to order on your way out.",
    body: "Nothing that fights recovery — just coffee, matcha and food that make the rest of the day easier.",
  },
  es: {
    eyebrow: "BUENO DESPUÉS DE UNA SESIÓN",
    heading: "Qué pedir al salir.",
    body: "Nada que compita con la recuperación — solo café, matcha y comida que hacen más fácil el resto del día.",
  },
} as const;

export const vattenDrinks = {
  en: [
    { img: "/images/matcha-horchata.webp", alt: "Matcha Horchata drink", name: "Matcha Horchata", coord: "MATCHA / HORCHATA / MILK", tag: "No coffee / Calm", icon: "crosshair" },
    { img: "/images/vanilla-coldbrew-latte.webp", alt: "Vanilla Cold Brew Latte drink", name: "Vanilla Cold Brew Latte", coord: "COLD BREW / VANILLA / MILK", tag: "Coffee / Cold", icon: "star" },
    { img: "/images/orange-tonic.webp", alt: "Orange Tonic drink", name: "Orange Tonic", coord: "ORANGE / TONIC / SODA", tag: "No coffee / Bright", icon: "star" },
    { img: "/images/protein-mocha.webp", alt: "Protein Mocha drink", name: "Protein Mocha", coord: "ESPRESSO / COCOA / PROTEIN", tag: "Coffee / Fuel", icon: "plus" },
    { img: "/images/mango-lychee-refresher.webp", alt: "Mango Lychee Refresher drink", name: "Mango Lychee Refresher", coord: "MANGO / LYCHEE / SODA", tag: "No coffee / Bright", icon: "star" },
  ],
  es: [
    { img: "/images/matcha-horchata.webp", alt: "Bebida Matcha Horchata", name: "Matcha Horchata", coord: "MATCHA / HORCHATA / LECHE", tag: "Sin café / Calma", icon: "crosshair" },
    { img: "/images/vanilla-coldbrew-latte.webp", alt: "Bebida Vanilla Cold Brew Latte", name: "Vanilla Cold Brew Latte", coord: "COLD BREW / VAINILLA / LECHE", tag: "Café / Frío", icon: "star" },
    { img: "/images/orange-tonic.webp", alt: "Bebida Orange Tonic", name: "Orange Tonic", coord: "NARANJA / TÓNICA / SODA", tag: "Sin café / Fresco", icon: "star" },
    { img: "/images/protein-mocha.webp", alt: "Bebida Protein Mocha", name: "Protein Mocha", coord: "ESPRESSO / CACAO / PROTEÍNA", tag: "Café / Energía", icon: "plus" },
    { img: "/images/mango-lychee-refresher.webp", alt: "Bebida Mango Lychee Refresher", name: "Mango Lychee Refresher", coord: "MANGO / LYCHEE / SODA", tag: "Sin café / Fresco", icon: "star" },
  ],
} as const;

export const vattenWellness = {
  en: {
    eyebrow: "ADD-ON / AVAILABLE",
    heading: "Protein, if your plan calls for it.",
    body: "Natural, unflavored protein you can add to any drink on this menu — no fitness-shake taste, no upsell talk. Just ask at the counter.",
  },
  es: {
    eyebrow: "EXTRA / DISPONIBLE",
    heading: "Proteína, si tu plan la pide.",
    body: "Proteína natural, sin sabor, que puedes agregar a cualquier bebida del menú — sin sabor a shake, sin discurso de venta. Solo pídela en la barra.",
  },
} as const;

export const vattenClosing = {
  en: {
    heading: "Therapy day. Coffee day.",
    supporting: "Bring your therapist. Recovery's better with good coffee.",
    ctaDirections: "Get directions",
    ctaPopular: "See what people order most",
  },
  es: {
    heading: "Día de terapia. Día de café.",
    supporting: "Trae a tu terapeuta. La recuperación se disfruta más con buen café.",
    ctaDirections: "Cómo llegar",
    ctaPopular: "Ver lo que más se pide",
  },
} as const;

/* Communities hub — directory of Lattitude Coffee's partner communities. */
export const communitiesSeo = {
  en: {
    title: "Communities — Lattitude Coffee",
    description: "The communities Lattitude Coffee partners with in Mérida — LET'S RIDE and Vatten Terapia Física — and how the cross-promotion works.",
  },
  es: {
    title: "Comunidades — Lattitude Coffee",
    description: "Las comunidades con las que colabora Lattitude Coffee en Mérida — LET'S RIDE y Vatten Terapia Física — y cómo funciona la publicidad cruzada.",
  },
} as const;

export const communitiesHero = {
  en: {
    eyebrow: "NETWORK / MÉRIDA",
    heading: "Communities in motion.",
    subhead: "Lattitude Coffee doesn't grow alone. We partner with communities that share the same idea — coffee for people in motion — whatever that motion looks like for them.",
    micro: ["STATUS / GROWING", "DIRECTION / FORWARD", "MADE WITH / INTENTION", "CURRENT POSITION / MÉRIDA"],
  },
  es: {
    eyebrow: "RED / MÉRIDA",
    heading: "Comunidades en movimiento.",
    subhead: "Lattitude Coffee no crece sola. Colaboramos con comunidades que comparten la misma idea — café para gente en movimiento — sea cual sea la forma que tome ese movimiento.",
    micro: ["ESTADO / CRECIENDO", "DIRECCIÓN / ADELANTE", "HECHO CON / INTENCIÓN", "POSICIÓN ACTUAL / MÉRIDA"],
  },
} as const;

export const communitiesIntro = {
  en: {
    eyebrow: "WHY PARTNER",
    heading: "Different motion, same idea.",
    body: [
      "Some communities move fast — a class, a ride, a workout. Others move slow and deliberate — recovery, therapy, prevention. Both end the same way: people looking for a good place to land.",
      "Each partner community gets its own page here, with the drinks and details that make sense for them — and every person who shows up with that community gets treated like they already belong.",
    ],
  },
  es: {
    eyebrow: "POR QUÉ COLABORAR",
    heading: "Movimiento distinto, misma idea.",
    body: [
      "Algunas comunidades se mueven rápido — una clase, un ride, un entrenamiento. Otras se mueven despacio y con intención — recuperación, terapia, prevención. Ambas terminan igual: gente buscando un buen lugar para aterrizar.",
      "Cada comunidad aliada tiene su propia página aquí, con las bebidas y detalles que tienen sentido para ella — y cualquier persona que llegue desde esa comunidad ya pertenece, desde que cruza la puerta.",
    ],
  },
} as const;

export const communitiesList = {
  en: [
    {
      slug: "letsride",
      name: "LET'S RIDE",
      kind: "Indoor cycling",
      tagline: "Class ends. The rhythm doesn't.",
      body: "An indoor cycling community that trains in rhythm. Lattitude Coffee is where the ride continues after class — coffee, ceremonial matcha and food for people who don't sit still.",
      tags: ["Movement / Cardio", "Community / Active"],
      instagram: null as string | null,
      external: null as { label: string; href: string } | null,
    },
    {
      slug: "vatten",
      name: "VATTEN",
      kind: "Physical therapy & rehab",
      tagline: "Recovery has a rhythm too.",
      body: "Vatten Terapia Física works on physiotherapy, rehabilitation and prevention across Mérida. Lattitude Coffee is where the recovery continues — hydration, natural ingredients and a place to sit still for once.",
      tags: ["Movement / Recovery", "Community / Wellness"],
      instagram: "https://www.instagram.com/vattenterapia/" as string | null,
      external: { label: "Book a session", href: "https://vattenmerida.site.agendapro.com/mx/sucursal/159438" } as { label: string; href: string } | null,
    },
  ],
  es: [
    {
      slug: "letsride",
      name: "LET'S RIDE",
      kind: "Ciclismo indoor",
      tagline: "La clase termina. El ritmo no.",
      body: "Una comunidad de ciclismo indoor que entrena al ritmo de la clase. Lattitude Coffee es donde sigue el ride después — café, matcha ceremonial y comida para quienes no se quedan quietos.",
      tags: ["Movimiento / Cardio", "Comunidad / Activa"],
      instagram: null as string | null,
      external: null as { label: string; href: string } | null,
    },
    {
      slug: "vatten",
      name: "VATTEN",
      kind: "Fisioterapia y rehabilitación",
      tagline: "La recuperación también tiene ritmo.",
      body: "Vatten Terapia Física trabaja fisioterapia, rehabilitación y prevención en Mérida. Lattitude Coffee es donde sigue la recuperación — hidratación, ingredientes naturales y un lugar para quedarte quieto, por una vez.",
      tags: ["Movimiento / Recuperación", "Comunidad / Bienestar"],
      instagram: "https://www.instagram.com/vattenterapia/" as string | null,
      external: { label: "Agenda una sesión", href: "https://vattenmerida.site.agendapro.com/mx/sucursal/159438" } as { label: string; href: string } | null,
    },
  ],
} as const;

export const communitiesCrossPromo = {
  en: {
    eyebrow: "HOW IT WORKS",
    heading: "One relationship, two directions.",
    note: "The same playbook, adapted for every community we add — none of it depends on either side having a marketing team.",
    rows: [
      { title: "Shared perk card", tag: "Redeemable both ways", icon: "crosshair" },
      { title: "Joint social content", tag: "Same story, two accounts", icon: "star" },
      { title: "Welcome code after class or session", tag: "One community, one perk", icon: "crosshair" },
      { title: "QR signage in both spaces", tag: "Table tents, front desk, receipts", icon: "arrow" },
    ],
  },
  es: {
    eyebrow: "CÓMO FUNCIONA",
    heading: "Una relación, dos direcciones.",
    note: "El mismo esquema, adaptado a cada comunidad que sumamos — nada de esto depende de que alguno de los dos tenga equipo de marketing.",
    rows: [
      { title: "Tarjeta de beneficio compartida", tag: "Canjeable en ambos sentidos", icon: "crosshair" },
      { title: "Contenido conjunto en redes", tag: "Misma historia, dos cuentas", icon: "star" },
      { title: "Código de bienvenida post-clase o sesión", tag: "Una comunidad, un beneficio", icon: "crosshair" },
      { title: "Señalética con QR en ambos espacios", tag: "Mesas, recepción, tickets", icon: "arrow" },
    ],
  },
} as const;

export const communitiesClosing = {
  en: {
    heading: "Know a community that fits?",
    supporting: "If your community already moves toward something — training, recovery, building, learning — there's probably a page here waiting to happen.",
    ctaInstagram: "Message us on Instagram",
  },
  es: {
    heading: "¿Conoces una comunidad que encaje?",
    supporting: "Si tu comunidad ya se mueve hacia algo — entrenar, recuperarse, construir, aprender — probablemente hay una página aquí esperando a pasar.",
    ctaInstagram: "Escríbenos por Instagram",
  },
} as const;

export const notFound = {
  en: {
    seoTitle: "404 — Lattitude Coffee",
    code: "404",
    eyebrow: "STATUS / NOT FOUND",
    heading: "Wrong coordinates.",
    body: "This page moved, or it was never here. Either way, you're not lost — just off the route.",
    cta: "Back to Lattitude Coffee",
    micro: ["STATUS / 404", "DIRECTION / HOME", "CURRENT POSITION / UNKNOWN"],
  },
  es: {
    seoTitle: "404 — Lattitude Coffee",
    code: "404",
    eyebrow: "ESTADO / NO ENCONTRADO",
    heading: "Coordenadas equivocadas.",
    body: "Esta página se movió, o nunca existió. De cualquier forma, no estás perdido — solo fuera de ruta.",
    cta: "Volver a Lattitude Coffee",
    micro: ["ESTADO / 404", "DIRECCIÓN / INICIO", "POSICIÓN ACTUAL / DESCONOCIDA"],
  },
} as const;
