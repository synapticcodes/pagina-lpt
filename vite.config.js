import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: './index.html'
    }
  },
  server: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/obrigado/, to: '/index.html' }
      ]
    }
  }
})