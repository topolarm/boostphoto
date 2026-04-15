// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.boost.photo',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  trailingSlash: 'never',
});
