import { createNodeResolver } from 'eslint-plugin-import-x';

import * as importx from './plugins/import-x.js';
import * as stylistic from './plugins/stylistic-js.js';
import layout from './rules/layout.js';
import problems from './rules/problems.js';
import suggestions from './rules/suggestions.js';

export default {
  name: '@chronocide/base',
  files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: {
    ...stylistic.plugins,
    ...importx.plugins
  },
  settings: {
    'import-x/extensions': ['.js', '.jsx'],
    'import-x/resolver-next': [createNodeResolver()]
  },
  rules: {
    ...problems,
    ...suggestions,
    ...layout,
    ...stylistic.rules,
    ...importx.rules
  }
};
