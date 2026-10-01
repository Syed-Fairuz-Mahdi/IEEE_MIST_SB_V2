// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://ieee-mist-sb.vercel.app',
  base: '/',
  redirects: {
    '/wie': '/chapters/wie',
  },
  output: 'server',
  adapter: vercel(),
});