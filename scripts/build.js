import * as esbuild from 'esbuild';

const base = {
  entryPoints: ['src/index.js'],
  outdir: 'dist',
  bundle: true,
  platform: 'node'
};

await esbuild.build({
  ...base,
  format: 'cjs',
  outExtension: {
    '.js': '.cjs'
  }
});

await esbuild.build({
  ...base,
  format: 'esm',
  outExtension: {
    '.js': '.mjs',
  }
});
