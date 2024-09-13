import typescriptEslint from '@typescript-eslint/eslint-plugin';

const key = '@typescript-eslint';

export const plugins = {
  [key]: typescriptEslint
};

export const rules = Object.fromEntries(Object.entries({
  // Recommended
  'await-thenable': 'error',
  'ban-ts-comment': ['error', {
    'ts-ignore': true,
    'ts-nocheck': true,
    'ts-check': false,
    'ts-expect-error': {
      descriptionFormat: '^: TS\\d+,.+'
    }
  }],
  'no-array-constructor': 'error',
  'no-array-delete': 'error',
  'no-base-to-string': 'error',
  'no-duplicate-enum-values': 'error',
  'no-duplicate-type-constituents': 'error',
  'no-empty-object-type': 'off',
  'no-explicit-any': ['error', {
    fixToUnknown: true
  }],
  'no-extra-non-null-assertion': 'error',
  'no-floating-promises': 'error',
  'no-for-in-array': 'error',
  'no-implied-eval': 'error',
  'no-misused-new': 'error',
  'no-misused-promises': ['error', {
    checksConditionals: true,
    checksSpreads: true
  }],
  'no-namespace': 'error',
  'no-non-null-asserted-optional-chain': 'error',
  'no-redundant-type-constituents': 'error',
  'no-require-imports': 'error',
  'no-this-alias': 'error',
  'no-unnecessary-type-assertion': 'error',
  'no-unnecessary-type-constraint': 'error',
  'no-unsafe-argument': 'off', // Generates false positives
  'no-unsafe-assignment': 'off', // Generates false positives
  'no-unsafe-call': 'off', // Generates false positives
  'no-unsafe-declaration-merging': 'error',
  'no-unsafe-enum-comparison': 'error',
  'no-unsafe-function-type': 'error',
  'no-unsafe-member-access': 'off', // Generates false positives
  'no-unsafe-return': 'off', // Generates false positives
  'no-unsafe-unary-minus': 'error',
  'no-unused-expressions': 'error',
  'no-unused-vars': ['warn', {
    args: 'all',
    argsIgnorePattern: '^_',
    caughtErrors: 'all',
    caughtErrorsIgnorePattern: '^_',
    destructuredArrayIgnorePattern: '^_',
    varsIgnorePattern: '^_',
    ignoreRestSiblings: true
  }],
  'no-wrapper-object-types': 'error',
  'only-throw-error': 'error',
  'prefer-as-const': 'error',
  'prefer-namespace-keyword': 'error',
  'prefer-promise-reject-errors': 'error',
  'require-await': 'error',
  'restrict-plus-operands': 'error',
  'restrict-template-expressions': 'error',
  'return-await': ['error', 'in-try-catch'],
  'triple-slash-reference': 'error',
  'unbound-method': 'error',
  // Stylistic
  'adjacent-overload-signatures': 'error',
  'array-type': ['error', { default: 'array-simple' }],
  'ban-tslint-comment': 'error',
  'class-literal-property-style': 'off',
  'class-methods-use-this': 'error',
  'consistent-generic-constructors': ['error', 'constructor'],
  'consistent-indexed-object-style': ['error', 'record'],
  'consistent-return': 'off',
  'consistent-type-assertions': ['error', {
    assertionStyle: 'as',
    objectLiteralTypeAssertions: 'allow-as-parameter'
  }],
  'consistent-type-definitions': ['error', 'type'],
  'consistent-type-exports': 'error',
  'consistent-type-imports': ['error', {
    prefer: 'type-imports',
    fixStyle: 'separate-type-imports',
    disallowTypeAnnotations: true
  }],
  'default-param-last': 'error',
  'dot-notation': 'error',
  'explicit-function-return-type': 'off',
  'explicit-member-accessibility': ['error', {
    accessibility: 'no-public'
  }],
  'explicit-module-boundary-types': 'error',
  'init-declarations': 'off',
  'max-params': ['warn', { max: 3 }],
  'member-ordering': 'off',
  'method-signature-style': ['error', 'property'],
  'naming-convention': ['error', {
    // Enforce camelCase
    selector: 'variableLike',
    format: ['camelCase', 'UPPER_CASE'],
    leadingUnderscore: 'allow'
  }, {
    // Ignore imports
    selector: 'variable',
    format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
    modifiers: ['global']
  }, {
    // Disable underscore on public members
    selector: [
      'classProperty',
      'classMethod'
    ],
    modifiers: ['public'],
    format: ['camelCase'],
    leadingUnderscore: 'forbid'
  }, {
    // Enforce underscore on private members
    selector: 'memberLike',
    modifiers: ['private'],
    format: ['camelCase'],
    leadingUnderscore: 'require'
  }, {
    // Enforce underscore on protected members
    selector: 'memberLike',
    modifiers: ['protected'],
    format: ['camelCase'],
    leadingUnderscore: 'require'
  }, {
    // Enforce PascalCase on types / interfaces
    selector: 'typeLike',
    format: ['PascalCase']
  }],
  'no-confusing-non-null-assertion': 'error',
  'no-confusing-void-expression': ['error', {
    ignoreArrowShorthand: true
  }],
  'no-deprecated': 'warn',
  'no-dupe-class-members': 'off',
  'no-dynamic-delete': 'warn',
  'no-empty-function': 'error',
  'no-extraneous-class': 'error',
  'no-import-type-side-effects': 'error',
  'no-inferrable-types': 'error',
  'no-invalid-this': 'off',
  'no-invalid-void-type': 'error',
  'no-loop-func': 'error',
  'no-magic-numbers': 'off',
  'no-meaningless-void-operator': 'error',
  'no-mixed-enums': 'error',
  'no-non-null-asserted-nullish-coalescing': 'error',
  'no-non-null-assertion': 'error',
  'no-redeclare': 'off',
  'no-restricted-imports': 'off',
  'no-restricted-types': 'off',
  'no-shadow': 'off',
  'no-unnecessary-boolean-literal-compare': 'error',
  'no-unnecessary-condition': 'error',
  'no-unnecessary-parameter-property-assignment': 'off',
  'no-unnecessary-qualifier': 'error',
  'no-unnecessary-template-expression': 'error',
  'no-unnecessary-type-arguments': 'error',
  'no-use-before-define': 'error',
  'no-useless-constructor': 'error',
  'no-useless-empty-export': 'error',
  'non-nullable-type-assertion-style': 'error',
  'parameter-properties': 'error',
  'prefer-destructuring': 'error',
  'prefer-enum-initializers': 'error',
  'prefer-find': 'error',
  'prefer-for-of': 'error',
  'prefer-function-type': 'error',
  'prefer-includes': 'error',
  'prefer-literal-enum-member': 'error',
  'prefer-nullish-coalescing': ['error', {
    ignoreConditionalTests: true
  }],
  'prefer-optional-chain': 'error',
  'prefer-readonly': 'error',
  'prefer-readonly-parameter-types': 'off',
  'prefer-reduce-type-parameter': 'error',
  'prefer-regexp-exec': 'error',
  'prefer-return-this-type': 'error',
  'prefer-string-starts-ends-with': 'error',
  'promise-function-async': 'error',
  'require-array-sort-compare': 'error',
  'strict-boolean-expressions': ['error', {
    allowAny: true,
    allowNullableObject: true,
    allowNullableBoolean: true
  }],
  'switch-exhaustiveness-check': ['error', {
    allowDefaultCaseForExhaustiveSwitch: true
  }],
  'typedef': 'off',
  'unified-signatures': 'error',
  'use-unknown-in-catch-callback-variable': 'error'
}).map(([k, v]) => [`${key}/${k}`, v]));
