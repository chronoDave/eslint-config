import parser from '@typescript-eslint/parser';

import * as stylistic from './plugins/stylistic-ts';

export default {
  name: '@chronocide/typescript',
  files: ['**/*.ts', '**/*.tsx'],
  parser,
  plugins: {
    ...stylistic.plugins
  },
  rules: {
    ...stylistic.rules
  }
};
