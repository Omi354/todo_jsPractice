import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "array-callback-return": "error",
      "block-scoped-var	": "warn",
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];
