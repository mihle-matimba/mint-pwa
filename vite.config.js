import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["assets/icon.png"],
      manifest: {
        name: "Mint",
        short_name: "Mint",
        description: "Money In Transit",
        start_url: "/",
        scope: "/",
        display: "standalone",
        theme_color: "#0b0b0f",
        background_color: "#0b0b0f",
        icons: [
          {
            src: "/assets/pwa-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/assets/pwa-512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/assets/pwa-512-maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ]
      }
    })
  ],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: true,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true
      }
    }
  }
})
