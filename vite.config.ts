import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Inline images as base64 so the whole site can be exported as one
    // self-contained HTML file for the live preview artifact.
    assetsInlineLimit: 150000,
  },
})
