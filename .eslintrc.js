module.exports = {
  root: true,
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "prettier", "react-hooks"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",

        "@typescript-eslint/no-shadow": ["error"],
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
          },
        ],
        "no-shadow": "off",
        "no-undef": "off",
        "spaced-comment": [
          "error",
          "always",
          {
            markers: ["/"],
          },
        ],
      },
    },
  ],
};
