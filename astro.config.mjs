// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://boost.photo',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/privacy') && !page.includes('/terms') && !page.includes('/hvco-guide'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  trailingSlash: 'never',
});
