import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'fs'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-files',
      closeBundle() {
        const filesToCopy = [
          { src: resolve(__dirname, '404.html'), dest: resolve(__dirname, 'dist/404.html') },
          { src: resolve(__dirname, '.nojekyll'), dest: resolve(__dirname, 'dist/.nojekyll') }
        ]

        filesToCopy.forEach(({ src, dest }) => {
          if (existsSync(src)) {
            try {
              copyFileSync(src, dest)
              console.log(`[copy-files] copied ${src} -> ${dest}`)
            } catch (err) {
              console.warn(`[copy-files] failed to copy ${src}:`, err)
            }
          } else {
            console.warn(`[copy-files] source file not found: ${src}, skipping.`)
          }
        })
      }
    }
  ],
})
