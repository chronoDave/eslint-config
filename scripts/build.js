import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: [
    'src/base.js',
    'src/typescript.js'
  ],
  format: 'cjs',
  outExtension: {
    '.js': '.cjs'
  },
  outdir: 'dist',
  bundle: true,
  platform: 'node'
});

await esbuild.build({
  entryPoints: [
    'src/base.js',
    'src/typescript.js'
  ],
  format: 'esm',
  outExtension: {
    '.js': '.mjs',
  },
  outdir: 'dist',
  bundle: true,
  platform: 'node'
});
