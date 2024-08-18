import base, { env } from './dist/eslint-config.js';

export default [
  base.configs.typescript,
  {
    languageOptions: {
      globals: {
        ...env.node
      }
    }
  }
];
