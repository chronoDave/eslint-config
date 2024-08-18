import problems from './rules/problems';
import suggestions from './rules/suggestions';
import layout from './rules/layout';

import * as stylistic from './plugins/stylistic-js';

export default {
  name: '@chronocide/base',
  files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
  plugins: {
    ...stylistic.plugins
  },
  rules: {
    ...problems,
    ...suggestions,
    ...layout,
    ...stylistic.rules
  }
};
