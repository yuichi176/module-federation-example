import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import baseConfig from './base.js'

/**
 *
 * A custom ESLint configuration for libraries that use Vue.js.
 *
 * ref: https://eslint.vuejs.org/user-guide/#example-configuration-with-typescript-eslint-and-prettier
 *
 * */
export default tseslint.config(
  ...baseConfig,
  { ignores: ['*.d.ts', '**/coverage', '**/dist'] },
  {
    extends: [...pluginVue.configs['flat/recommended']],
    files: ['**/*.{ts,tsx,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      'vue/multi-word-component-names': 'warn',
      'vue/no-setup-props-destructure': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
    },
  },
)
