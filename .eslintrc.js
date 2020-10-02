module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'object-curly-newline': ['error', { consistent: true }],
    'max-len': ['error', { code: 120 }],
    'arrow-parens': ['error', 'as-needed'],
    'prettier/prettier': 'error',
    'no-return-assign': 0,
    'no-param-reassign': 0,
    'implicit-arrow-linebreak': 0,
    'import/prefer-default-export': 0,
  },
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['prettier', 'vue', '@typescript-eslint'],
};
