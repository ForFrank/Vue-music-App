import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [vue(), vueJsx(), visualizer()],
});
