import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import requireTransform from "vite-plugin-require";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    requireTransform({
      // your options here
    }),
  ],
});
