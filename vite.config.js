import { fileURLToPath, URL } from "node:url";

import { defineConfig, splitVendorChunkPlugin } from "vite";
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ["../../../../.."],
    },
  },
  plugins: [
    Icons({
      // experimental
      autoInstall: true,
    }),
    splitVendorChunkPlugin(),
    vue(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    assetsDir: "static",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".")[1];
          if (/png|jpeg|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          }
          return `static/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
      },
    },
  },
});
