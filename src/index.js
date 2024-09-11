import base from './config/base';
import typescript from './config/typescript';
import ignore from './config/ignore';
import browser from './config/env/browser';
import node from './config/env/node';

export const env = { browser, node };
export const config = { base, typescript, ignore };

/**
 * @param {object} options
 * @param {boolean} options.ts Enable TypeScript rules
 * @param {boolean} options.node Add Node globals
 * @param {boolean} options.browser Add Browser globals
 */
export default options => {
  const cfg = [ignore, base];
  const globals = x => ({ languageOptions: { globals: x } });

  if (options?.ts) config.push(typescript);
  if (options?.node) config.push(globals(env.node));
  if (options?.browser) config.push(globals(env.browser));

  return cfg;
};
