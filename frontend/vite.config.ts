import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,         // Desactiva la minificación JS y CSS
    sourcemap: true,       // Opcional: genera archivos .map para debugging
    outDir: 'dist-original'  //Carpeta en donde se guarda el original
  }
})
