import parser from '@typescript-eslint/parser';

import * as stylistic from './plugins/stylistic-ts';
import * as typescriptEslint from './plugins/typescript-eslint';

export default {
  name: '@chronocide/typescript',
  files: ['**/*.ts', '**/*.tsx'],
  languageOptions: {
    parser,
    parserOptions: {
      project: true
    }
  },
  plugins: {
    ...typescriptEslint.plugins,
    ...stylistic.plugins
  },
  rules: {
    ...typescriptEslint.rules,
    ...stylistic.rules,
    /**
     * Disabled to prevent false-positives
     * @see https://typescript-eslint.io/rules/no-array-constructor/
     */
    'no-array-constructor': 'off',
    /**
     * Disabled to prevent false-positives
     * @see https://typescript-eslint.io/rules/no-implied-eval/
     */
    'no-implied-eval': 'off',
    /**
     * Disabled to prevent false-positives
     * @see https://typescript-eslint.io/rules/no-unused-expressions/
     */
    'no-unused-expressions': 'off',
    /**
     * Disabled to prevent false-positives
     * @see https://typescript-eslint.io/rules/only-throw-error/
     */
    'no-throw-literal': 'off',
    /**
     * Disabled to prevent false-positives
     * @see https://typescript-eslint.io/rules/prefer-promise-reject-errors/
     */
    'prefer-promise-reject-errors': 'off',
    /**
     * Disabled to prevent false-positives
     * @see https://typescript-eslint.io/rules/require-await/
     */
    'require-await': 'off',
    /**
     * Disabled to prevent false-positives
     * @see https://typescript-eslint.io/rules/return-await/
     */
    'return-await': 'off',
    /**
     * Disabled to prevent false-positives
     * @see https://typescript-eslint.io/rules/consistent-return/
     */
    'consistent-return': 'off',
    /**
     * Disabled to prevent false-positives
     * @see https://typescript-eslint.io/rules/default-param-last/
     */
    'default-param-last': 'off',
    /**
     * Disabled to prevent false-positives
     * @see https://typescript-eslint.io/rules/dot-notation/
     */
    'dot-notation': 'off',
    /**
     * Disabled to prevent false-positives
     * @see https://typescript-eslint.io/rules/max-params/
     */
    'max-params': 'off',
    /**
     * Disabled to prevent false-positives
     * @see https://typescript-eslint.io/rules/no-empty-function/
     */
    'no-empty-function': 'off',
    /**
     * Disabled to prevent false-positives
     * @see https://typescript-eslint.io/rules/no-loop-func/
     */
    'no-loop-func': 'off',
    /**
     * Disabled to prevent false-positives
     * @see https://typescript-eslint.io/rules/no-use-before-define/
     */
    'no-use-before-define': 'off',
    /**
     * Disabled to prevent false-positives
     * @see https://typescript-eslint.io/rules/no-useless-constructor/
     */
    'no-useless-constructor': 'off',
    /**
     * Disabled to prevent false-positives
     * @see https://typescript-eslint.io/rules/prefer-destructuring/
     */
    'prefer-destructuring': 'off'
  }
};
