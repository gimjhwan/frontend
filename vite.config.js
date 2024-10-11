import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        popup: resolve(__dirname, "popup.html"),
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
      {
        find: "@asset",
        replacement: path.resolve(__dirname, "src/assets"),
      },
      {
        find: "@apis",
        replacement : path.resolve(__dirname, "src/apis"),
      },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@hooks",
        replacement: path.resolve(__dirname, "src/hooks"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "src/pages"),
      },
      {
        find: "@styles",
        replacement: path.resolve(__dirname, "src/styles"),
      },
      {
        find: "@stores",
        replacement: path.resolve(__dirname, "src/stores"),
      }
    ],
  },
});
