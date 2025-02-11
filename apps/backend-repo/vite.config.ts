import { defineConfig } from "vite";
import generatePackageJson from "rollup-plugin-generate-package-json";
import packageJson from "./package.json" assert { type: "json" };
import { builtinModules } from "node:module";

const external = [...builtinModules, ...builtinModules.map((m) => `node:${m}`)];

export default defineConfig({
  build: {
    ssr: "./src/index.ts",
    outDir: "dist",
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
      preserveSymlinks: true,
      external,
      plugins: [
        // @ts-ignore
        generatePackageJson({
          // @ts-ignore
          baseContents: packageJson,
        }),
      ],
    },
  },
  ssr: {
    external,
  },
});