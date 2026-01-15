import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('LazyPage1')) {
            return 'LazyPage1';
          }
          if (id.includes('LazyPage2')) {
            return 'LazyPage2';
          }
          if (id.includes('LazyPage3')) {
            return 'LazyPage3';
          }
        }
      }
    }
  }
})
