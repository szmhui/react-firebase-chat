import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//配置路径别名
import path from "path";
const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
});
