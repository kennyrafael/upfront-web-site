import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // 5174, because 5173 is the app. The two are expected to run side by side: the site's
  // calls to action point at the app, and a dead link is the easiest thing to ship.
  server: { port: 5174 },
});
