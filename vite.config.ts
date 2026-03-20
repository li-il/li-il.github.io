import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'yourusername.github.io' with your repo name
export default defineConfig({
  base: './',
  plugins: [react()]
})