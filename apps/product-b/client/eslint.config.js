import vueConfig from '@repo/eslint-config/vue'
import tseslint from 'typescript-eslint'

export default tseslint.config(...vueConfig)
