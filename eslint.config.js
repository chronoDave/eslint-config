import base, { env } from './dist/index.mjs';

export default [
  ...base,
  {
    languageOptions: {
      globals: {
        ...env.node
      }
    }
  }
]
