import base from './config/base';
import typescript from './config/typescript';

import browser from './env/browser';
import node from './env/node';

export const env = { browser, node };

export default {
  configs: {
    base,
    typescript
  }
};
