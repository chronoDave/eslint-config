import problems from './rules/problems';
import suggestions from './rules/suggestions';
import layout from './rules/layout';
import pluginImport from './rules/import';

export const rules = {
  ...problems,
  ...suggestions,
  ...layout,
  ...pluginImport
};

export default {
  plugins: ['import'],
  rules
};
