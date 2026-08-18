import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relative paths so the app works locally and on GitHub Pages.
  base: "./",
  plugins: [react()],
});
