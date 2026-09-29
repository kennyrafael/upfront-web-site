import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';

/**
 * Serves `/planos` in development, the way the deployment does.
 *
 * Vite's MPA mode resolves `/planos/` to `planos/index.html` and leaves `/planos` blank;
 * Vercel with `cleanUrls` serves the extensionless path and redirects the other one. Without
 * this the two disagree about which address works, and the nav link can only point at one —
 * so a link that is correct in production would be a blank page on every developer's machine.
 *
 * Deliberately a list of known pages rather than "any path that looks like a directory". Two
 * documents do not need a resolver, and a general one would happily swallow a genuine 404.
 */
const PAGES = ['/planos'];

function extensionlessPages(): Plugin {
  return {
    name: 'upfront-extensionless-pages',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((request, _response, next) => {
        const [path, query] = (request.url ?? '').split('?');
        if (PAGES.includes(path)) {
          request.url = `${path}/index.html${query ? `?${query}` : ''}`;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), extensionlessPages()],
  /**
   * **Two documents, not a single-page app.**
   *
   * `/planos` is a real page with its own HTML, its own entry and its own `<title>`, rather
   * than a route inside the home page. That keeps the promise in this repository's own
   * `CLAUDE.md` — no router, no stores, no API client — and it avoids a catch-all rewrite, the
   * piece of configuration that fails silently and only in production. `vercel.json` carries
   * `cleanUrls` instead, which is a statement about how files are addressed rather than a rule
   * that hands every unknown path to one document.
   *
   * The visitor's language survives the full page load because it is kept in `localStorage`,
   * which was the one thing a router would have bought here.
   *
   * `appType: 'mpa'` is not optional. The default falls back to `index.html` for any unknown
   * path, so in development `/planos` would quietly serve the home page and the divergence
   * would only show up on a deployment.
   */
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        planos: fileURLToPath(new URL('./planos/index.html', import.meta.url)),
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // 5174, because 5173 is the app. The two are expected to run side by side: the site's
  // calls to action point at the app, and a dead link is the easiest thing to ship.
  server: { port: 5174 },
});
