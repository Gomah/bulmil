module.exports = {
  extends: 'stylelint-config-recommended',
  plugins: ['stylelint-scss', 'stylelint-a11y', 'stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'selector-type-no-unknown': [true, { ignoreTypes: [/^bm-/] }],
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'scss/at-rule-no-unknown': true,
  },
};
