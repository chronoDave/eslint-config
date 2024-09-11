const input = 'src/index.js';
const output = type => `dist/eslint-config.${type}`;

export default [{
  input,
  external: [
    '@stylistic/eslint-plugin-js',
    '@stylistic/eslint-plugin-ts',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser'
  ],
  output: [{
    file: output('js'),
    exports: 'auto',
    format: 'es'
  }]
}];
