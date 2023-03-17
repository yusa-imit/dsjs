// @ts-check

/** @type {import("eslint").ESLint} */

module.exports = {
  root: true,
  env: {browser: true, es2022: true, node: true},
  extends: ["eslint:recommended", "prettier"],
  overrides: [{
    files: ['*.ts'],
    parser: "@typescript-eslint/parser",
    extends: ["standard-with-typescript", "prettier"],
    parserOptions: {
      project: ['./packages/**/tsconfig.json'],
    },

  }],
};
