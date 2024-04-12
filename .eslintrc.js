module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    quotes: ['error', 'single'],
    'react/jsx-indent': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'max-len': 'off',
    'no-unused-vars': 'warn',
    'react/function-component-definition': 0,
    'no-shadow': 0,
    'object-curly-newline': 0,
    'react/jsx-props-no-spreading': 'warn',
    'react/jsx-indent-props': [2, 2],
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 0,
  },
  globals: {
    __IS_DEV__: true,
  },
};
