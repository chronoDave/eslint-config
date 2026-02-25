# eslint-config

## Install

```sh
npm i @chronocide/eslint-config
```

## Usage

### Quick

**`eslint.config.js`**

```JS
import config from './dist/eslint-config.js';

export default config({
  ts: true, // Enable for TypeScript support
  node: true, // Enable for Node globals
  browser: true // Enable for Browser globals
});

```

### Manual

**`eslint.config.js`**

```JS
import { configs, env } from './dist/eslint-config.js';

export default [
  configs.ignore,
  configs.base,
  // configs.typescript for TypeScript support
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
