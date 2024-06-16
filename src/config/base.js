import problems from './rules/problems';
import suggestions from './rules/suggestions';
import layout from './rules/layout';

import * as stylistic from './plugins/stylistic-js';

export default {
  name: '@chronocide/base',
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
