import stylistic from '@stylistic/eslint-plugin-ts';

const key = '@stylistic/ts';

export const plugins = {
  [key]: stylistic
};

export const rules = Object.fromEntries(Object.entries({
  'block-spacing': ['error', 'always'],
  'brace-style': ['error', '1tbs'],
  'comma-dangle': ['error', 'never'],
  'comma-spacing': 'error',
  'func-call-spacing': 'error',
  'function-call-spacing': 'error',
  'indent': ['error', 2],
  'key-spacing': 'error',
  'keyword-spacing': 'error',
  'lines-around-comment': 'off',
  'lines-between-class-members': 'error',
  'member-delimiter-style': 'error',
  'no-extra-parens': ['error', 'all', {
    ignoreJSX: 'multi-line',
    enforceForArrowConditionals: false
  }],
  'no-extra-semi': 'error',
  'object-curly-spacing': 'off',
  'padding-line-between-statements': 'off',
  'quote-props': ['error', 'consistent-as-needed'],
  'quotes': ['error', 'single'],
  'semi': ['error', 'always'],
  'space-before-blocks': ['error', 'always'],
  'space-before-function-paren': ['error', {
    anonymous: 'never',
    named: 'never',
    asyncArrow: 'always'
  }],
  'space-infix-ops': 'error',
  'type-annotation-spacing': 'error'
}).map(([k, v]) => [`${key}/${k}`, v]));
