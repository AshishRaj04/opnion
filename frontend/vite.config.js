import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server : {
    proxy : {
      '/home' :'http://localhost:4000' ,
      '/api/v1/login':'http://localhost:4000' ,
      '/api/v1/registerUser':'http://localhost:4000' ,
    }
  },
  plugins: [react()],
})
