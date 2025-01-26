import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import VueNamedExport from '../src/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueNamedExport({
      removeDefault: true,
    }),
  ],
})
