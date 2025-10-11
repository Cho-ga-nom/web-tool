// @ts-check
import rootConfig from '../../eslint.config.js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

// Reuse root config and apply backend-specific overrides
export default (
  tseslint.config(
    {
      ignores: ['eslint.config.mjs'],
    },
    // spread the base TypeScript configuration from the root
    ...tseslint.configs.recommendedTypeChecked,
    {
      languageOptions: {
        globals: {
          ...globals.node,
          ...globals.jest,
        },
        sourceType: 'commonjs',
        parserOptions: {
          projectService: true,
          tsconfigRootDir: import.meta.dirname,
        },
      },
    },
    {
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/no-unsafe-argument': 'warn',
      },
    },
  )
)
