import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  build: {
    // This will prevent warnings for chunks larger than 500kB
    chunkSizeWarningLimit: 2000, 

    // Manual chunking example: separating vendor and firebase code
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate React and Firebase into their own chunks
          vendor: ['react', 'react-dom'],
          firebase: ['firebase/app', 'firebase/auth', 'firebase/storage'],
        },
      },
    },
  },
});
