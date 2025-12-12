import * as importx from 'eslint-plugin-import-x';

import format from '../lib/rule.js';

const key = 'import-x';

export const plugins = {
  [key]: {
    meta: importx.meta,
    rules: importx.rules
  }
};

export const rules = format('import-x')({
  // Helpful
  'export': 'error',
  'no-deprecated': 'warn',
  'no-empty-named-blocks': 'error',
  'no-extraneous-dependencies': ['error', {
    optionalDependencies: [
      '**/*.spec.*',
      '**/*.fixture.*',
      '**/*.config.*',
      'test/**/*',
      'scripts/**/*'
    ],
    devDependencies: [
      '**/*.spec.*',
      '**/*.fixture.*',
      '**/*.config.*',
      'test/**/*',
      'scripts/**/*'
    ]
  }],
  'no-mutable-exports': 'error',
  'no-named-as-default': 'off',
  'no-named-as-default-member': 'error',
  'no-unused-modules': 'error',
  // Module systems
  'no-amd': 'error',
  'no-commonjs': 'error',
  'no-import-module-exports': 'error',
  'unambiguous': 'error',
  // Static analysis
  'default': 'error',
  'named': 'off',
  'namespace': 'error',
  'no-absolute-path': 'error',
  'no-cycle': 'error',
  'no-dynamic-require': 'off',
  'no-internal-modules': 'off',
  'no-relative-packages': 'off',
  'no-relative-parent-imports': 'off',
  'no-restricted-paths': 'off',
  'no-self-import': 'error',
  'no-unresolved': ['error', { caseSensitiveStrict: true, commonjs: true }],
  'no-useless-path-segments': 'error',
  'no-webpack-loader-syntax': 'error',
  // Style guide
  'consistent-type-specifier-style': ['error', 'prefer-top-level'],
  'dynamic-import-chunkname': 'off',
  'exports-last': 'off',
  'extensions': ['error', 'always'],
  'first': 'error',
  'group-exports': 'off',
  'max-dependencies': 'off',
  'newline-after-import': 'error',
  'no-anonymous-default-export': 'off',
  'no-default-export': 'off',
  'no-duplicates': 'error',
  'no-named-default': 'off',
  'no-named-export': 'off',
  'no-namespace': 'off',
  'no-unassigned-import': 'warn',
  'order': ['error', {
    'newlines-between': 'always',
    'warnOnUnassignedImports': true,
    'pathGroups': [{
      pattern: './*.scss',
      group: 'index',
      position: 'before'
    }],
    'pathGroupsExcludedImportTypes': ['builtin'],
    'groups': [
      'type',
      ['builtin', 'external'],
      'internal',
      'parent',
      'sibling',
      'index'
    ]
  }],
  'prefer-default-export': 'off'
});
