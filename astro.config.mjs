// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://demo.neuraljira.tech',
  output: 'static',
  server: {
    port: 4331,
  },
});
