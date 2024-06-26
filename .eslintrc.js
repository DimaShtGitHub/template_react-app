module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
  ],
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
    'max-len': ['error', { code: 100, ignoreComments: true }],
    'no-unused-vars': 'warn',
    'react/function-component-definition': 0,
    'no-shadow': 0,
    'object-curly-newline': 0,
    'react/jsx-props-no-spreading': 'warn',
    'react/jsx-indent-props': [2, 2],
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 0,
    'linebreak-style': 0,
    'i18next/no-literal-string': [
      'error', {
        markupOnly: true, ignoreAttribute: ['to', 'data-testid'],
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'no-param-reassign': 'off',
    'jsx-a11y/no-autofocus': 'off'
  },
  globals: {
    __IS_DEV__: true,
  },

  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],

      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },

    },
  ],
};
