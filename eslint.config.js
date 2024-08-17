import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin"; // corrected import
import pluginReact from "eslint-plugin-react";
import reactJsxRuntime from "eslint-plugin-react/configs/jsx-runtime"; // Import JSX runtime config

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Add your custom rules here if needed
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    ...reactJsxRuntime, // Extend with JSX runtime configuration
  },
];
