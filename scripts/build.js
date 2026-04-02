import esbuild from 'esbuild';
import fsp from 'fs/promises';

const raw = await fsp.readFile('package.json', 'utf-8');
const pkg = JSON.parse(raw);

esbuild.build({
  entryPoints: ['src/index.js'],
  outfile: 'dist/eslint-config.js',
  external: Object.keys(pkg.peerDependencies),
  bundle: true,
  format: 'esm',
  platform: 'node'
});
