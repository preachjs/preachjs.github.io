import preact from "@preact/preset-vite";
import { readFile } from "fs/promises";
import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.BASE_URL ?? "/",
  plugins: [
    preact({
      prerender: {
        enabled: true,
        renderTarget: "#app",
      },
    }),
    preactPages(),
    mdx({
      jsxImportSource: "preact",
    }),
  ],
});

/**
 * @returns {import("vite").Plugin}
 */
function preactPages({ root = "/src/pages" } = {}) {
  return {
    name: "routes",
    enforce: "pre",
    resolveId(id) {
      if (id !== "~routes") {
        return;
      }
      return "/0~routes";
    },
    async load(id) {
      if (id !== "/0~routes") {
        return;
      }
      const code = (await readFile("./runtime/route.js", "utf8"))
        .replaceAll("#{__PLUGIN_PAGES_ROOT}", root + "/**/*.jsx")
        .replaceAll("#{__PLUGIN_PAGES_ROOT_REGEX}", `^${root}`);
      return {
        code,
      };
    },
  };
}
