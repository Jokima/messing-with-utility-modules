import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shared-components',
      filename: 'remoteEntry.js',
      exposes: {
        './index': './src/components/index.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: "ES2022"
  },
})
