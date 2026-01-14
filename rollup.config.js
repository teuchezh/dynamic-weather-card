import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import { readFileSync } from 'fs';
import copy from "rollup-plugin-copy";

// Read version from package.json
const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: false,
    entryFileNames: 'dynamic-weather-card.js',
    chunkFileNames: '[name]-[hash].js'
  },
  plugins: [
    replace({
      __VERSION__: JSON.stringify(pkg.version),
      preventAssignment: true
    }),
    resolve(),
    copy({
      targets: [
        {
          src: 'src/internalization/locales/**/*',
          dest: 'dist/locales'
        }
      ]
    }),
    terser({
      format: {
        comments: false
      },
      compress: {
        drop_console: false
      }
    })
  ]
};
