import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      ".output/**",
      ".vinxi/**",
      ".lovable/**",
      ".workspace/**",
      "src/routeTree.gen.js",
    ],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: { "react-hooks": reactHooks, "react-refresh": reactRefresh },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": "off",
      "no-empty": ["error", { allowEmptyCatch: true }],
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "server-only",
              message: "Use @tanstack/react-start/server-only for server boundaries.",
            },
          ],
        },
      ],
    },
  },
];
