// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://ieee-mist-sb.vercel.app',
  base: '/',
  output: 'server',
  adapter: vercel(),
});