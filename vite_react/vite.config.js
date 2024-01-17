import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: "./",
  name: "task4",
  outDir: "dist",
  base: "./",
  server: {
    port: 3001,
    open: false,
  },
  resolve: {
    alias: {
      "@": "src",
    },
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
    minify: "terser",
    lib: false,
  },
})
