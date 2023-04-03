const { build } = require('esbuild');
const { dependencies } = require('./package.json');

const sharedConfig = {
  entryPoints: ['./src/index.ts'],
  bundle: true,
  minify: true,
  external: Object.keys(dependencies),
};

build({
  ...sharedConfig,
  platform: 'node', // for CJS
  outfile: './dist/index.cjs',
}).catch(() => process.exit(1));

build({
  ...sharedConfig,
  outfile: './dist/index.js',
  platform: 'neutral', // for ESM
  format: 'esm',
}).catch(() => process.exit(1));
