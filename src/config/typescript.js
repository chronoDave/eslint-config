import parser from '@typescript-eslint/parser';

import * as stylistic from './plugins/stylistic-ts';

export default {
  name: '@chronocide/typescript',
  files: ['**/*.ts', '**/*.tsx'],
  languageOptions: {
    parser
  },
  plugins: {
    ...stylistic.plugins
  },
  rules: {
    ...stylistic.rules,
    'no-console': 'error'
  }
};
