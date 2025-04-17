import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/index.js'],
  outfile: 'dist/eslint-config.js',
  external: [
    '@stylistic/eslint-plugin-js',
    '@stylistic/eslint-plugin-ts',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'eslint-import-resolver-typescript',
    'eslint-plugin-import-x'
  ],
  bundle: true,
  format: 'esm',
  platform: 'node'
});
