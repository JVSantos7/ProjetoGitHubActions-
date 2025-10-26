// ESLint configuration for browser JavaScript (ES2021)
export default [
  {
    files: ["**/js/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "eqeqeq": "error",
      "no-console": "warn"
    }
  }
];
