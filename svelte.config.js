// svelte.config.js
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      runtime: 'nodejs20.x'
    }),
    prerender: {
      // Ignore 404 for favicon during prerender (add favicon.png to static/ when ready)
      handleHttpError: ({ path, message }) => {
        if (path === '/favicon.png') return;
        throw new Error(message);
      }
    }
  }
};

export default config;
