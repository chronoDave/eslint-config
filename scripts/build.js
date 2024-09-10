import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/index.js'],
  outfile: 'dist/eslint-config.js',
  bundle: true,
  external: [
    '@stylistic/eslint-plugin-js',
    '@stylistic/eslint-plugin-ts',
    '@typescript-eslint/parser',
    '@typescript-eslint/eslint-plugin'
  ],
  platform: 'node',
  format: 'esm'
});
