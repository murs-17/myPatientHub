import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

// Start currently appends a TypeScript registration footer even with disableTypes.
// Fix only that build-time generator branch; runtime routing remains unchanged.
export function ensureJavaScriptRouteGeneration() {
  const entry = fileURLToPath(import.meta.resolve("@tanstack/start-plugin-core"));
  const filename = resolve(dirname(entry), "start-router-plugin/route-tree-footer.js");
  const source = readFileSync(filename, "utf8");
  const signature = "const { startConfig, resolvedStartConfig } = opts.getConfig();";
  const guard = "if (startConfig.router.disableTypes) return [];";
  if (source.includes(guard)) return;
  if (!source.includes(signature)) {
    throw new Error(
      "The TanStack Start JavaScript generator compatibility fix needs review for this dependency version.",
    );
  }
  writeFileSync(filename, source.replace(signature, `${signature}\n\t${guard}`));
}
