import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-files',
      closeBundle() {
        // Copy 404.html to dist folder
        copyFileSync(
          resolve(__dirname, '404.html'),
          resolve(__dirname, 'dist/404.html')
        )
        // Copy .nojekyll to dist folder
        copyFileSync(
          resolve(__dirname, '.nojekyll'),
          resolve(__dirname, 'dist/.nojekyll')
        )
      }
    }
  ],
})
