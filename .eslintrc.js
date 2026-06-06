export default [
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    env: {
      browser: true,
      es2024: true,
      node: true,
    },
    globals: {
      React: "readonly",
    },
    rules: {
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "indent": ["warn", 2],
    },
  },
];
