# eslint-config

## Install

**`package.json`**

```JSON
{
  ...
  "script": {
    "@chronocide/eslint-config": "git+https://github.com/chronoDave/eslint-config.git"
  }
  ...
}
```

## Usage

**`eslint.config.js`**

```JS
import base, { env } from './dist/eslint-config.js';

export default [
  base.configs.base,
  // base.configs.typescript for TypeScript support
  {
    languageOptions: {
      globals: {
        ...env.node // Node globals
        ...env.browser // Browser globals
      }
    }
  }
];
```