import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        theme_color: "#f69435",
        background_color: "#f69435",
        display: "standalone",
        scope: "/",
        start_url: "/",
        short_name: "Nano Wallet",
        description: "secure, minimal nano blockchain client.",
        name: "Nano Wallet",
        // TODO: Add ICONS
      },
      includeAssets: ["**/*"],
      workbox: {
        globPatterns: ["**/*"],
        clientsClaim: true,
        skipWaiting: true
      }
    }),
  ],
});
