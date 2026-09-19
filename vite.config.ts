import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base must be the repo name for GitHub Pages project site
export default defineConfig({
  base: '/invitacion-18-template/',
  plugins: [react()],
})
