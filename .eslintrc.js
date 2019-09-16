module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    useJSXTextNode: true,
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:@stencil/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'es5', printWidth: 100 }],
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': 0,
  },
  settings: {
    'import/core-modules': ['@stencil/core/testing'],
  },
};
