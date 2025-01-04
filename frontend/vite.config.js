import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  root: 'frontend', // Set the root to the 'frontend' folder
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    outDir: '../dist', // Output the build in the root 'dist' folder
  },
});
