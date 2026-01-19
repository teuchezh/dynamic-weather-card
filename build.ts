#!/usr/bin/env bun
import { readFileSync } from 'fs';

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
  define: {
    __VERSION__: JSON.stringify(pkg.version)
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
