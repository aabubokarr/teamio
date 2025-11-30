import { cloudflare } from "@cloudflare/vite-plugin";
import build from "@hono/vite-build/cloudflare-workers";
import { defineConfig } from "vite";
import ssrHotReload from "vite-plugin-ssr-hot-reload";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command, isSsrBuild }) => {
  if (command === "serve") {
    return {
      plugins: [
        viteTsConfigPaths({
          projects: ["./tsconfig.json"],
        }),
        ssrHotReload(),
        cloudflare(),
      ],
    };
  }
  if (!isSsrBuild) {
    return {
      build: {
        rollupOptions: {
          input: ["./src/assets/style.css"],
          output: {
            assetFileNames: "assets/[name].[ext]",
          },
        },
      },
    };
  }
  return {
    plugins: [
      viteTsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      build({
        outputDir: "dist-server",
        entryContentAfterHooks: [],
        entryContentDefaultExportHook: (content) => content,
      }),
    ],
  };
});
