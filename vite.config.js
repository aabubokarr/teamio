import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react-oxc";
import { defineConfig } from "vite";

import { resolve } from "node:path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/teamio/',
  plugins: [
    TanStackRouterVite({
      autoCodeSplitting: true,
      virtualRouteConfig: "./src/routes.ts",
    }),
    viteReact(),
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs",
    },
  },
});
