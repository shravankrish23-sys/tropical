import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { convertImagesToWebP } from './scripts/convert-images.js';

function imageWebpOptimizerPlugin() {
  return {
    name: 'vite-plugin-webp-optimizer',
    async buildStart() {
      await convertImagesToWebP();
    }
  };
}

function serveInstagramLanding() {
  return {
    name: 'serve-instagram-landing',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/instagram' || req.url === '/instagram/') {
          req.url = '/instagram/index.html';
        }
        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [
    serveInstagramLanding(),
    imageWebpOptimizerPlugin(),
    react()
  ],
  server: {
    port: 3000,
    open: false
  }
});

