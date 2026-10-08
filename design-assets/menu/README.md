# Menú LATTITUDE° — v1 con descripciones

Menú impreso en 2 hojas A4 (794×1123px @96dpi), con descripción corta por bebida en la voz del sitio ("Café para gente en movimiento", "Nada aquí está por accidente").

Fuente editable: `src/pages/design-assets/menu.astro` (ruta gitignorada, nunca se despliega). Verlo en local con `astro dev --background` → `/design-assets/menu`. Para PDF: imprimir desde Chrome (A4, márgenes "ninguno", gráficos de fondo activados).

- **Hoja 1 — Con café**: 17 bebidas en 2 columnas.
- **Hoja 2 — Sin café, Alimentos, Extras**, más la banda "Nada aquí está por accidente." con la nota de jarabes hechos en casa.
- Cada producto: nombre, precio, línea de "coordenadas" en mono (los insumos, como en `drinksList`) y una frase descriptiva.
- Micrográficos: `sym-03` (café), `sym-06` (sin café), `sym-14` (alimentos), `sym-08` (extras), `sym-16` en la banda; `.star` marca las firmas de la casa (Dirty horchata, Orange tonic, Matcha horchata); `.crosshair` y `.ruler` como en la tarjeta LET'S RIDE.

## Fuentes de datos

- Productos y precios: `~/Desktop/menu.pdf` (menú impreso vigente).
- Insumos para las descripciones: base de costeo en Notion (leche base = deslactosada; refreshers = tónica + té de frambuesa / mango lychee; London fog = earl grey + vainilla sin azúcar).

Diferencias PDF vs Notion — se usó el precio del PDF: Espresso tonic ($70 vs $75), Filtrados ($85 vs $80 cada método).
