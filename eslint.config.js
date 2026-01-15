import js from '@eslint/js';
import litPlugin from 'eslint-plugin-lit';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    plugins: {
      lit: litPlugin
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        navigator: 'readonly',
        document: 'readonly',
        console: 'readonly',
        i18next: 'readonly',
        URL: 'readonly',
        Event: 'readonly',
        customElements: 'readonly',
        HTMLElement: 'readonly',
        CustomEvent: 'readonly',
        Date: 'readonly',
        Math: 'readonly',
        ResizeObserver: 'readonly',
        cancelAnimationFrame: 'readonly',
        requestAnimationFrame: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        DOMParser: 'readonly',
        __VERSION__: 'readonly'
      }
    },
    rules: {
      // General JavaScript rules
      'no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }],
      'no-console': 'off', // Allow console for logging
      'no-debugger': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'comma-dangle': ['error', 'never'],
      'eol-last': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'arrow-spacing': 'error',
      'keyword-spacing': 'error',
      'space-before-blocks': 'error',
      'space-infix-ops': 'error',
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
      'prefer-const': 'error',
      'no-var': 'error',

      // Lit-specific rules
      'lit/no-duplicate-template-bindings': 'error',
      'lit/no-legacy-template-syntax': 'error',
      'lit/no-useless-template-literals': 'warn'
    }
  },
  {
    ignores: [
      'node_modules/**',
      'dynamic-weather-card.js',
      'dist/**',
      '*.config.js'
    ]
  },
];
