// vite.config.prod.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración para producción con minificación
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,        // Activa minificación y ofuscamiento
    sourcemap: false,     // Opcional: desactiva los archivos .map
    outDir: 'dist-prod'
  }
})
