import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Autorise toutes les adresses réseau
    port: 5173,       // Définit le port du serveur de développement
  },
});
