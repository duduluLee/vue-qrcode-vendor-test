import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'


// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-qrcode-vendor-test',
  plugins: [vue(), mkcert()],
})
