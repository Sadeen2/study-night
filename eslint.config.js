import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.js'], 
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
        ...globals.cypress, 
      },
    },
    plugins: {
      js,
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-var': 'error',
      'no-unused-vars': 'warn',
      semi: ['error', 'always'],
      eqeqeq: 'error',
      'prefer-const': 'warn',
      'no-redeclare': 'off',
      'no-undef': 'off', 
    },
  },
]);
