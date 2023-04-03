const { build } = require('esbuild');
const { dependencies, peerDependencies } = require('./package.json');
const { Generator } = require('npm-dts');

new Generator({
  entry: 'src/LinkedinPostShare.ts',
  output: 'dist/LinkedinPostShare.d.ts',
}).generate();

const sharedConfig = {
  entryPoints: ['src/LinkedinPostShare.ts'],
  bundle: true,
  minify: true,
  external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
};

build({
  ...sharedConfig,
  platform: 'node', // for CJS
  outfile: 'dist/LinkedinPostShare.cjs',
}).catch(() => process.exit(1));

build({
  ...sharedConfig,
  outfile: 'dist/LinkedinPostShare.js',
  platform: 'neutral', // for ESM
  format: 'esm',
}).catch(() => process.exit(1));
