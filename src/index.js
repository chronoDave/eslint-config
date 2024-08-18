import base from './config/base';
import typescript from './config/typescript';
import browser from './config/env/browser';
import node from './config/env/node';

export const env = { browser, node };
export const configs = { base, typescript };
