import base from './config/base';
import typescript from './config/typescript';
import ignore from './config/ignore';
import browser from './config/env/browser';
import node from './config/env/node';

export const env = { browser, node };
export const config = { base, typescript, ignore };

export default options => {
  const cfg = [ignore, base];
  const globals = x => ({ languageOptions: { globals: x } });

  if (options?.ts) config.push(typescript);
  if (options?.node) config.push(globals(env.node));
  if (options?.browser) config.push(globals(env.browser));

  return cfg;
};
