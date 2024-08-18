import { configs, env } from './dist/eslint-config.js';

export default [
  configs.base,
  configs.typescript,
  {
    languageOptions: {
      globals: {
        ...env.node
      }
    }
  }
];
