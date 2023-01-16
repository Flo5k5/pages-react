import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mkcert(),
    react()
  ],
  server: {
    proxy: {
      // Fix current problems with "wrangler pages dev" command
      '/api': 'http://127.0.0.1:3001',
    },
    https: true,
    port: 3000,
    strictPort: true,
    hmr: {
      clientPort: 3000,
    },
  }
})
