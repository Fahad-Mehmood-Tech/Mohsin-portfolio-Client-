import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mohsin-portfolio/',   // 👈 apne GitHub repo ka exact naam yahan likho
})