import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        clientsClaim: true,
        skipWaiting: true
      },
      injectRegister: 'script-defer',
      devOptions: {
        enabled: true,
        type: 'module'
      }
    }),
  ],
});