import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginTailwindCSS from 'eslint-plugin-tailwindcss'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      tailwindcss: eslintPluginTailwindCSS,
    },
    rules: {
      ...eslintPluginTailwindCSS.configs.recommended.rules,
      '@typescript-eslint/consistent-type-imports': ['warn'],
      'react-hooks/rules-of-hooks': 'error',
    },
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
]

export default eslintConfig
