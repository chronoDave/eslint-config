import problems from './rules/problems';
import suggestions from './rules/suggestions';
import layout from './rules/layout';

export const rules = {
  ...problems,
  ...suggestions,
  ...layout
}

export default { rules };
