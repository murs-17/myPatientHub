import { describe, expect, it } from "vitest";

// Load every converted reusable module, including the controls not used by
// these two pages, so broken imports cannot hide in an unvisited dependency.
const modules = import.meta.glob([
  "../components/**/*.jsx",
  "../hooks/*.jsx",
  "../lib/*.js",
  "!../lib/error-capture.js",
]);

describe("Converted JavaScript dependencies", () => {
  it.each(Object.entries(modules))("loads %s without a broken import", async (_filename, load) => {
    const module = await load();
    expect(Object.keys(module).length).toBeGreaterThan(0);
  });
});
