import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server : {
    proxy : {
      '/home' :'http://localhost:4000' ,
      '/api/v1/login':'http://localhost:4000' ,
      '/api/v1/registerUser':'http://localhost:4000' ,
      '/dashboard':'http://localhost:4000' ,
    }
  },
  plugins: [react()],
})
