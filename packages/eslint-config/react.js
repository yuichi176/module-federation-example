import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'
import baseConfig from './base.js'

/**
 * A custom ESLint configuration for libraries that use React.
 * */
export default tseslint.config(
  ...baseConfig,
  { ignores: ['*.d.ts', '**/coverage', '**/dist'] },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
    },
  },
)
