import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project sites live at /repo-name/ — set VITE_BASE_PATH in the deploy workflow
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
})
