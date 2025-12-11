import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  
  // Explicitly set base path to the root to ensure assets load correctly from /
  base: '/', 
  
  build: {
    // Correctly outputs to the parent directory's 'public' folder
    outDir: '../public', 
    emptyOutDir: true,
    
    // Removing custom rollupOptions to let Vite use its reliable default asset naming.
  }
})