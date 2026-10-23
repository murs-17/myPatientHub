// The Lovable wrapper supplies Start, React, Tailwind, Nitro, aliases and preview support.
// Keep these plugins together rather than installing a duplicate plugin stack.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { ensureJavaScriptRouteGeneration } from "./scripts/tanstack-javascript.js";

const configure = defineConfig({
  // Build for Vercel when deploying outside Lovable; Lovable's own build ignores this.
  nitro: { preset: "vercel" },
  tanstackStart: {
    server: { entry: "server" },
    router: {
      generatedRouteTree: "routeTree.gen.js",
      disableTypes: true,
    },
  },
});

export default async (environment) => {
  ensureJavaScriptRouteGeneration();
  const config = await configure(environment);
  // The wrapper already supplies the @ alias. Its TS-only path reader is not
  // needed for this project; jsconfig.json supplies editor navigation instead.
  config.plugins = config.plugins
    .flat(Infinity)
    .filter((plugin) => plugin?.name !== "vite-tsconfig-paths");
  return config;
};
