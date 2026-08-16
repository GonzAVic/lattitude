export type Locale = "en" | "es";
export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "en";

export function otherLocale(lang: Locale): Locale {
  return lang === "en" ? "es" : "en";
}

/** Prefix for locale-aware absolute paths. English lives at "/", Spanish at "/es/". */
export function localePath(lang: Locale, path: string = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return lang === "en" ? clean : `/es${clean}`;
}

export const site = {
  en: {
    title: "LATTITUDE° — Coffee for people in motion",
    description:
      "LATTITUDE° — Coffee for people in motion. Specialty coffee, ceremonial matcha and food in Mérida, Yucatán. Made with intention.",
    ogAlt: "LATTITUDE° — Specialty coffee in Mérida, Yucatán",
  },
  es: {
    title: "LATTITUDE° — Café para gente en movimiento",
    description:
      "LATTITUDE° — Café para gente en movimiento. Café de especialidad, matcha ceremonial y comida en Mérida, Yucatán. Hecho con intención.",
    ogAlt: "LATTITUDE° — Café de especialidad en Mérida, Yucatán",
  },
} as const;

export const nav = {
  en: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    concept: "Concept",
    drinks: "Drinks",
    people: "People",
    visit: "Visit",
    currentPosition: "Current position",
    hours: "Mon–Fri / 09:00–21:00 · Sat / 10:00–18:00",
    instagram: "@lattitudecoffee ↗",
    switchTo: "ES",
    switchAria: "Switch to Spanish",
  },
  es: {
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    concept: "Concepto",
    drinks: "Bebidas",
    people: "Gente",
    visit: "Visítanos",
    currentPosition: "Posición actual",
    hours: "Lun–Vie / 09:00–21:00 · Sáb / 10:00–18:00",
    instagram: "@lattitudecoffee ↗",
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
    { variant: "a", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1400&q=80&auto=format&fit=crop", alt: "People in a contemporary café", label: "People / In motion" },
    { variant: "b", img: "https://images.unsplash.com/photo-1766250343186-847200b11032?w=1400&q=80&auto=format&fit=crop", alt: "Barista preparing specialty coffee", label: "Coffee / Craft" },
    { variant: "c", img: "https://images.unsplash.com/photo-1516011762365-b3ae4a895b51?w=1400&q=80&auto=format&fit=crop", alt: "Coffee takeaway packaging", label: "Objects / Purpose" },
    { variant: "d", img: "https://images.unsplash.com/photo-1542372147193-a7aca54189cd?w=1400&q=80&auto=format&fit=crop", alt: "Coffee being prepared at a bar", label: "Handoff / Ready" },
    { variant: "b", img: "https://images.unsplash.com/photo-1704770064557-416292d1f4bd?w=1400&q=80&auto=format&fit=crop", alt: "Creative person working", label: "Work / Build" },
    { variant: "a", img: "https://images.unsplash.com/photo-1752027992582-2ce5f9414fb4?w=1400&q=80&auto=format&fit=crop", alt: "Coffee drinks to go", label: "Movement / To go" },
  ],
  es: [
    { variant: "a", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1400&q=80&auto=format&fit=crop", alt: "Personas en un café contemporáneo", label: "Gente / En movimiento" },
    { variant: "b", img: "https://images.unsplash.com/photo-1766250343186-847200b11032?w=1400&q=80&auto=format&fit=crop", alt: "Barista preparando café de especialidad", label: "Café / Oficio" },
    { variant: "c", img: "https://images.unsplash.com/photo-1516011762365-b3ae4a895b51?w=1400&q=80&auto=format&fit=crop", alt: "Empaque de café para llevar", label: "Objetos / Propósito" },
    { variant: "d", img: "https://images.unsplash.com/photo-1542372147193-a7aca54189cd?w=1400&q=80&auto=format&fit=crop", alt: "Café siendo preparado en la barra", label: "Entrega / Listo" },
    { variant: "b", img: "https://images.unsplash.com/photo-1704770064557-416292d1f4bd?w=1400&q=80&auto=format&fit=crop", alt: "Persona creativa trabajando", label: "Trabajo / Construir" },
    { variant: "a", img: "https://images.unsplash.com/photo-1752027992582-2ce5f9414fb4?w=1400&q=80&auto=format&fit=crop", alt: "Bebidas de café para llevar", label: "Movimiento / Para llevar" },
  ],
} as const;

export const marquee = {
  en: { eyebrow: "Coffee · Ceremonial matcha · Refreshers · Food", hint: "Pause on hover / Zoom in on focus" },
  es: { eyebrow: "Café · Matcha ceremonial · Refrescos · Comida", hint: "Pausa al pasar el cursor / Zoom al enfocar" },
} as const;

export const intent = {
  en: { heading: "Made for real life." },
  es: { heading: "Hecho para la vida real." },
} as const;

export const intentStories = {
  en: [
    { img: "https://images.unsplash.com/photo-1704770064557-416292d1f4bd?w=1800&q=80&auto=format&fit=crop", alt: "Person working from a café", label: "Table / Useful", title: "A place to get something done.", body: "Come with a laptop, a conversation or a half-finished idea. Stay comfortable. Keep moving." },
    { img: "https://images.unsplash.com/photo-1766250343186-847200b11032?w=1800&q=80&auto=format&fit=crop", alt: "Barista working with an espresso machine", label: "Detail / Matters", title: "Good coffee without the theater.", body: "We care about quality, balance and the details that make a drink worth coming back for." },
    { img: "https://images.unsplash.com/photo-1516011762365-b3ae4a895b51?w=1800&q=80&auto=format&fit=crop", alt: "Minimal takeaway packaging", label: "Simple / Useful", title: "Ingredients with a reason.", body: "Natural ingredients first. Sugar-free options where they make sense—not just because a trend told us to." },
    { img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=80&auto=format&fit=crop", alt: "People meeting in a coffee shop", label: "Meet / Share", title: "More than a table and a cup.", body: "Workdays, meetups, workshops and moments that put the right people in the same room." },
  ],
  es: [
    { img: "https://images.unsplash.com/photo-1704770064557-416292d1f4bd?w=1800&q=80&auto=format&fit=crop", alt: "Persona trabajando desde un café", label: "Mesa / Útil", title: "Un lugar para sacar las cosas adelante.", body: "Ven con una laptop, una conversación o una idea a medias. Ponte cómodo. Sigue en movimiento." },
    { img: "https://images.unsplash.com/photo-1766250343186-847200b11032?w=1800&q=80&auto=format&fit=crop", alt: "Barista trabajando con una máquina de espresso", label: "Detalle / Importa", title: "Buen café sin tanto show.", body: "Nos importa la calidad, el balance y los detalles que hacen que una bebida valga la pena repetir." },
    { img: "https://images.unsplash.com/photo-1516011762365-b3ae4a895b51?w=1800&q=80&auto=format&fit=crop", alt: "Empaque minimalista para llevar", label: "Simple / Útil", title: "Ingredientes con una razón.", body: "Ingredientes naturales primero. Opciones sin azúcar donde tienen sentido — no solo porque una tendencia lo diga." },
    { img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=80&auto=format&fit=crop", alt: "Personas reuniéndose en una cafetería", label: "Reunirse / Compartir", title: "Más que una mesa y una taza.", body: "Días de trabajo, meetups, talleres y momentos que reúnen a las personas correctas en el mismo lugar." },
  ],
} as const;

export const drinksSection = {
  en: { eyebrow: "Featured at LATTITUDE°", heading: "What people order the most.", body: "Coffee leads the menu. Matcha brings a different rhythm. Food keeps the day moving." },
  es: { eyebrow: "Destacado en LATTITUDE°", heading: "Lo que la gente más pide.", body: "El café lidera el menú. El matcha trae otro ritmo. La comida mantiene el día en movimiento." },
} as const;

export const drinksList = {
  en: [
    { img: "https://images.unsplash.com/photo-1542372147193-a7aca54189cd?w=1800&q=80&auto=format&fit=crop", alt: "Coffee drink being prepared", name: "Dirty Horchata", coord: "ESPRESSO / MATCHA / HORCHATA", tag: "Signature / Movement", icon: "crosshair" },
    { img: "https://images.unsplash.com/photo-1752027992582-2ce5f9414fb4?w=1800&q=80&auto=format&fit=crop", alt: "Coffee drinks to go", name: "Vanilla Cold Brew Latte", coord: "COLD BREW / VANILLA / MILK", tag: "Coffee / Cold", icon: "star" },
    { img: "https://images.unsplash.com/photo-1766250343186-847200b11032?w=1800&q=80&auto=format&fit=crop", alt: "Barista preparing specialty coffee", name: "Flat White", coord: "ESPRESSO / STEAMED MILK", tag: "Coffee / Classic", icon: "crosshair" },
    { img: "https://images.unsplash.com/photo-1516011762365-b3ae4a895b51?w=1800&q=80&auto=format&fit=crop", alt: "Coffee takeaway packaging", name: "Mango Lychee Refresher", coord: "MANGO / LYCHEE / SODA", tag: "No coffee / Bright", icon: "star" },
    { img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=80&auto=format&fit=crop", alt: "People in a contemporary café", name: "Grilled Cheese", coord: "BREAD / CHEESE / BUTTER", tag: "Food / Comfort", icon: "crosshair" },
  ],
  es: [
    { img: "https://images.unsplash.com/photo-1542372147193-a7aca54189cd?w=1800&q=80&auto=format&fit=crop", alt: "Bebida de café siendo preparada", name: "Dirty Horchata", coord: "ESPRESSO / MATCHA / HORCHATA", tag: "Firma / Movimiento", icon: "crosshair" },
    { img: "https://images.unsplash.com/photo-1752027992582-2ce5f9414fb4?w=1800&q=80&auto=format&fit=crop", alt: "Bebidas de café para llevar", name: "Vanilla Cold Brew Latte", coord: "COLD BREW / VAINILLA / LECHE", tag: "Café / Frío", icon: "star" },
    { img: "https://images.unsplash.com/photo-1766250343186-847200b11032?w=1800&q=80&auto=format&fit=crop", alt: "Barista preparando café de especialidad", name: "Flat White", coord: "ESPRESSO / LECHE VAPORIZADA", tag: "Café / Clásico", icon: "crosshair" },
    { img: "https://images.unsplash.com/photo-1516011762365-b3ae4a895b51?w=1800&q=80&auto=format&fit=crop", alt: "Empaque de café para llevar", name: "Mango Lychee Refresher", coord: "MANGO / LYCHEE / SODA", tag: "Sin café / Fresco", icon: "star" },
    { img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=80&auto=format&fit=crop", alt: "Personas en un café contemporáneo", name: "Grilled Cheese", coord: "PAN / QUESO / MANTEQUILLA", tag: "Comida / Confort", icon: "crosshair" },
  ],
} as const;

export const statement = {
  en: {
    eyebrow: "The idea behind LATTITUDE°",
    heading: "Nothing here is here by accident.",
    body: "The space, the drinks and the small decisions around them are designed with a reason. A table you can actually work from. Power when you need it. Good internet. Natural ingredients. Coffee worth leaving the house for.",
    micrographic: "Nothing by accident",
  },
  es: {
    eyebrow: "La idea detrás de LATTITUDE°",
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
    { title: "Seasonal coordinate →", tag: "Changes with the rotation", icon: "arrow" },
  ],
  es: [
    { title: "Citrus Flat White", tag: "Café / Fresco", icon: "crosshair" },
    { title: "Mango Lychee Flat White", tag: "Café / Experimento", icon: "star" },
    { title: "Protein Mocha", tag: "Café / En movimiento", icon: "crosshair" },
    { title: "Coordenada de temporada →", tag: "Cambia con la rotación", icon: "arrow" },
  ],
} as const;

export const people = {
  en: {
    alt: "People spending time together in a café",
    pill: "ROOM / ACTIVE",
    heading: "Built for people building things.",
    body: "You do not need a job title to belong here. Bring the laptop. Meet someone. Start something. Finish something. Stay for another coffee.",
    tags: ["Work", "Meetups", "Workshops", "Creatives", "Builders", "People with projects"],
    arrive: "Arrive",
    leave: "Leave motivated",
  },
  es: {
    alt: "Personas pasando tiempo juntas en un café",
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
    hoursLabel: "Hours",
    hoursWeekday: "Monday–Friday · 9:00 AM–9:00 PM",
    hoursSaturday: "Saturday · 10:00 AM–6:00 PM",
    instagramLabel: "Instagram",
    googleMaps: "Google Maps",
    instagram: "Instagram",
    coordEyebrow: "LATTITUDE° / Exact coordinates",
  },
  es: {
    eyebrow: "Posición actual / Mérida",
    heading: "Encuentra tu camino aquí.",
    addressLabel: "Dirección",
    address: "Paraíso Maya · Calle 16 A, entre 15 A y 15 B · Mérida, Yucatán",
    hoursLabel: "Horario",
    hoursWeekday: "Lunes–Viernes · 9:00 AM–9:00 PM",
    hoursSaturday: "Sábado · 10:00 AM–6:00 PM",
    instagramLabel: "Instagram",
    googleMaps: "Google Maps",
    instagram: "Instagram",
    coordEyebrow: "LATTITUDE° / Coordenadas exactas",
  },
} as const;

export const footer = {
  en: {
    copy: "A coffee shop for people in motion. Good coffee, ceremonial matcha, useful space and a point of view. Made with intention in Mérida, Yucatán.",
    exploreLabel: "Explore",
    concept: "Concept",
    drinks: "Drinks",
    people: "People",
    visit: "Visit",
    connectLabel: "Connect",
    instagram: "Instagram ↗",
    googleMaps: "Google Maps ↗",
    pill: "NOTHING BY ACCIDENT",
    madeWith: "Made with intention.",
  },
  es: {
    copy: "Una cafetería para gente en movimiento. Buen café, matcha ceremonial, espacio útil y un punto de vista. Hecho con intención en Mérida, Yucatán.",
    exploreLabel: "Explorar",
    concept: "Concepto",
    drinks: "Bebidas",
    people: "Gente",
    visit: "Visítanos",
    connectLabel: "Conecta",
    instagram: "Instagram ↗",
    googleMaps: "Google Maps ↗",
    pill: "NADA POR ACCIDENTE",
    madeWith: "Hecho con intención.",
  },
} as const;
