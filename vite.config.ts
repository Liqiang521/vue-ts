import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import eslintPlugin from "vite-plugin-eslint"; // vite 5.x 版本 无法找到声明文件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    eslintPlugin({
      cache: false,
      include: ["src/**/*.cjs", "src/**/*.ts", "src/**/*.vue", "src/**/*.tsx", "src/*.vue"],
      exclude: ["node_modules/**"]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
