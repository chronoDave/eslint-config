import * as base from './base';
import typescript from './rules/typescript';

const shared = {
  'class-methods-use-this': '@typescript-eslint/class-methods-use-this',
  'dot-notation': '@typescript-eslint/dot-notation',
  'init-declarations': '@typescript-eslint/init-declarations',
  'max-params': '@typescript-eslint/max-params',
  'no-array-constructor': '@typescript-eslint/no-array-constructor',
  'no-dupe-class-members': '@typescript-eslint/no-dupe-class-members',
  'no-empty-function': '@typescript-eslint/no-empty-function',
  'no-implied-eval': '@typescript-eslint/no-implied-eval',
  'no-invalid-this': '@typescript-eslint/no-invalid-this',
  'no-loop-func': '@typescript-eslint/no-loop-func',
  'no-loss-of-precision': '@typescript-eslint/no-loss-of-precision',
  'no-magic-numbers': '@typescript-eslint/no-magic-numbers',
  'no-shadow': '@typescript-eslint/no-shadow',
  'no-unused-expressions': '@typescript-eslint/no-unused-expressions',
  'no-use-before-define': '@typescript-eslint/no-use-before-define',
  'no-useless-constructor': '@typescript-eslint/no-useless-constructor',
  'only-throw-error': '@typescript-eslint/only-throw-error',
  'prefer-destructuring': '@typescript-eslint/prefer-destructuring',
  'prefer-promise-reject-errors': '@typescript-eslint/prefer-promise-reject-errors',
  'require-await': '@typescript-eslint/require-await',
  'return-await': '@typescript-eslint/return-await',
};

const extensions = ['.js', '.mjs', '.cjs', '.jsx', '.ts', '.tsx', '.d.ts'];

export default [
  ...base,
  {
    name: '@chronocide/typescript',
    file: ['**/*.ts', '**/*.tsx'],
    plugins: ['@typescript-eslint'],
    languageOptions : {
      parser: '@typescript-eslint/parser'
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
      },
      'import/resolver': {
        node: {
          extensions
        }
      },
      'import/extensions': extensions,
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    },
    rules: {
      ...Object.fromEntries(Object.keys(shared).map(key => [key, 'off'])),
      ...Object.fromEntries(Object.entries(base.rules).map(([k, v]) => [shared[k] ? shared[k] : k, v])),
      ...typescript
    }
  }]