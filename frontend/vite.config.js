import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chameleon/',
  build: {
    assetsDir: 'assets',
    outDir: 'dist'
  },
  plugins: [react()]
})

