import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//add essa lib para ajustar upload de svg no projeto (lembrar de fixar a versão)
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
});
