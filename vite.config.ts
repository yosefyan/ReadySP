import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://yosefyan.github.io/ReadySP/",
  server: {
    open: true,
  },
});
