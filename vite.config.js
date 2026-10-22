import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Set base to '/your-repo-name/' if you deploy to GitHub Pages project pages.
  base: './'
})
