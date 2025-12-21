import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import fs from 'fs'
import path from 'path'

// Helper to get project ID from .firebaserc
function getFirebaseProjectId() {
  try {
    const firebasercPath = path.resolve(__dirname, '../.firebaserc');
    if (fs.existsSync(firebasercPath)) {
      const firebaserc = JSON.parse(fs.readFileSync(firebasercPath, 'utf-8'));
      return firebaserc?.projects?.default || 'my-new-firebase-project-94e22';
    }
  } catch (e) {
    console.warn("Could not read .firebaserc", e);
  }
  return 'my-new-firebase-project-94e22';
}

const projectId = getFirebaseProjectId();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  
  // Explicitly set base path to the root to ensure assets load correctly from /
  base: '/', 
  
  build: {
    // Correctly outputs to the parent directory's 'public' folder
    outDir: '../public', 
    emptyOutDir: true,
  },

  server: {
    proxy: {
      '/api': {
        target: `http://127.0.0.1:5001/${projectId}/us-central1/api`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
