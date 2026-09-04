// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://lattitudecoffee.mx',
  i18n: {
    // Spanish is the default and lives at the root (Mérida is the market that
    // actually searches for the shop). English is prefixed under /en/.
    defaultLocale: 'es',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  // Keep the old English-at-root URLs alive: everything that used to live under
  // /es/ is now the root, so point the stale /es/* paths at their new homes.
  redirects: {
    '/es': '/',
    '/es/about': '/about',
    '/es/letsride': '/letsride',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/letsride'),
    }),
  ],
});
