import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',  // ⚠ critical for GH Pages
  plugins: [react()]
})