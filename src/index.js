import base from './config/base';
import browser from './env/browser';
import node from './env/node';
// import typescript from './config/typescript';

export const env = { browser, node };

export default {
  configs: {
    base
  }
}
// export { typescript };
