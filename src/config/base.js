import problems from './rules/problems';
import suggestions from './rules/suggestions';
import layout from './rules/layout';

import * as stylisticJs from './plugins/stylistic-js';

export const rules = {
  ...problems,
  ...suggestions,
  ...layout,
  ...stylisticJs.rules
};

export const plugins = {
  ...stylisticJs.plugins
};

export default {
  name: '@chronocide/base',
  plugins,
  rules
};
