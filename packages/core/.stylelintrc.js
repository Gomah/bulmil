module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended',
    'stylelint-a11y/recommended',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-a11y', 'stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'no-invalid-position-at-import-rule': null,
    'selector-type-no-unknown': [true, { ignoreTypes: [/^bm-/] }],
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'scss/at-import-partial-extension': null,
    'scss/at-rule-no-unknown': true,
  },
};
