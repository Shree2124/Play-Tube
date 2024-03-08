import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy:{
      '/api': 'https://play-tube-api.vercel.app',
      // '/api': "http://localhost:5555"
    }
  },
  plugins: [react()],
})
