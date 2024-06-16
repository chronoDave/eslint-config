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

export const plugins = ['import'];

export default {
  plugins,
  rules
};
