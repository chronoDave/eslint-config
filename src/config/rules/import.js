export default {
  'import/prefer-default-export': 'off',
  'import/order': ['error', {
    'newlines-between': 'always-and-inside-groups',
    'groups': [
      'builtin',
      'external',
      'internal',
      'parent',
      'sibling',
      'index'
    ]
  }]
};
