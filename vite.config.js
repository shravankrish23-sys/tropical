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

export default defineConfig({
  plugins: [
    imageWebpOptimizerPlugin(),
    react()
  ],
  server: {
    port: 3000,
    open: false
  }
});

