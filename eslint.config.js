import base, { env } from './dist/index.mjs';

export default [
  base.configs.base,
  {
    languageOptions: {
      globals: {
        ...env.node
      }
    }
  }
];
