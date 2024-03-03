/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: ["@repo/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
  },
  rules: {
    "no-redeclare": "off",
    "no-undef": "off",
  },
};
