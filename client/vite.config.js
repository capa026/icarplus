import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createCopyPlugin } from 'vite-plugin-copy';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createCopyPlugin({
      patterns: [{ from: '_redirects', to: '_redirects' }],
    }),
  ],
});
