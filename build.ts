#!/usr/bin/env bun
import { readFileSync } from 'fs';
import type { BunPlugin } from 'bun';

// The demo page's strings live in the same translation files but are never shown in
// Home Assistant, so they are left out of the card bundle; demo.html loads them itself
const stripDemoStrings: BunPlugin = {
  name: 'strip-demo-strings',
  setup(build) {
    build.onLoad({ filter: /locales[\\/][^\\/]+[\\/]translation\.json$/ }, async ({ path }) => {
      const { demo: _demo, ...strings } = JSON.parse(await Bun.file(path).text());
      return { contents: JSON.stringify(strings), loader: 'json' };
    });
  }
};

// Read version from package.json
const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));

// Build configuration
const result = await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './',
  naming: 'dynamic-weather-card.js',
  target: 'browser',
  format: 'esm',
  minify: {
    syntax: true,
    whitespace: true,
    identifiers: true
  },
  sourcemap: 'none',
  plugins: [stripDemoStrings],
  define: {
    __VERSION__: JSON.stringify(pkg.version),
    'process.env.NODE_ENV': '"production"'
  }
});

if (!result.success) {
  console.error('Build failed');
  for (const message of result.logs) {
    console.error(message);
  }
  process.exit(1);
}

console.log('✅ Build successful!');
console.log(`📦 Output: dynamic-weather-card.js`);
for (const output of result.outputs) {
  console.log(`   Size: ${(output.size / 1024).toFixed(2)} KB`);
}
