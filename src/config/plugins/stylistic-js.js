import stylistic from '@stylistic/eslint-plugin-js';

const key = '@stylistic/js';

export const plugins = {
  [key]: stylistic
};

export const rules = Object.fromEntries(Object.entries({
  'array-bracket-newline': ['error', 'consistent'],
  'array-bracket-spacing': ['error', 'never'],
  'array-element-newline': ['error', 'consistent'],
  'arrow-parens': ['error', 'as-needed'],
  'arrow-spacing': ['error', {
    before: true,
    after: true
  }],
  'block-spacing': ['error', 'always'],
  'brace-style': ['error', '1tbs'],
  'comma-dangle': ['error', 'never'],
  'comma-spacing': 'error',
  'comma-style': 'error',
  'computed-property-spacing': 'error',
  'dot-location': ['error', 'property'],
  'eol-last': 'error',
  'function-call-argument-newline': ['error', 'consistent'],
  'function-call-spacing': 'error',
  'function-paren-newline': ['error', { minItems: 4 }],
  'generator-star-spacing': ['error', {
    before: true,
    after: false
  }],
  'implicit-arrow-linebreak': 'error',
  'indent': ['error', 2],
  'jsx-quotes': ['error', 'prefer-single'],
  'key-spacing': 'error',
  'keyword-spacing': 'error',
  'line-comment-position': 'off',
  'linebreak-style': 'off',
  'lines-around-comment': 'off',
  'lines-between-class-members': 'error',
  'max-len': 'error',
  'max-statements-per-line': 'error',
  'multiline-comment-style': 'error',
  'multiline-ternary': 'off',
  'new-parens': ['error', 'always'],
  'newline-per-chained-call': 'error',
  'no-confusing-arrow': ['error', { allowParens: true }],
  'no-extra-parens': ['error', 'all', {
    ignoreJSX: 'multi-line',
    enforceForArrowConditionals: false
  }],
  'no-extra-semi': 'error',
  'no-floating-decimal': 'error',
  'no-mixed-operators': 'error',
  'no-mixed-spaces-and-tabs': 'error',
  'no-multi-spaces': 'error',
  'no-multiple-empty-lines': ['error', { max: 1 }],
  'no-tabs': 'error',
  'no-trailing-spaces': 'error',
  'no-whitespace-before-property': 'error',
  'nonblock-statement-body-position': 'error',
  'object-curly-newline': ['error', {
    multiline: true,
    minProperties: 4,
    consistent: true
  }],
  'object-curly-spacing': 'off',
  'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
  'one-var-declaration-per-line': ['error', 'always'],
  'operator-linebreak': ['error', 'after'],
  'padded-blocks': ['error', 'never'],
  'padding-line-between-statements': 'off',
  'quote-props': ['error', 'consistent-as-needed'],
  'quotes': ['error', 'single'],
  'rest-spread-spacing': ['error', 'never'],
  'semi': ['error', 'always'],
  'semi-spacing': ['error', {
    before: false,
    after: true
  }],
  'semi-style': ['error', 'last'],
  'space-before-blocks': ['error', 'always'],
  'space-before-function-paren': ['error', {
    anonymous: 'never',
    named: 'never',
    asyncArrow: 'always'
  }],
  'space-in-parens': ['error', 'never'],
  'space-infix-ops': 'error',
  'space-unary-ops': 'error',
  'spaced-comment': ['error', 'always'],
  'switch-colon-spacing': 'error',
  'template-curly-spacing': ['error', 'never'],
  'template-tag-spacing': ['error', 'always'],
  'wrap-iife': ['error', 'outside'],
  'wrap-regex': 'off',
  'yield-star-spacing': ['error', {
    before: false,
    after: true
  }]
}).map(([k, v]) => [`${key}/${k}`, v]));
