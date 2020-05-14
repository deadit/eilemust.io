module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
    env: {
      browser: true,
      jest: true,
    },
    plugins: ['react', 'import', 'prettier'],
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      'max-len': ['error', 100],
      'no-underscore-dangle': ['error', { allow: ['_id'] }],
      'no-mixed-operators': 'off',
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: true,
            object: false,
          },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
      'import/prefer-default-export': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.js'],
        },
      ],
      'prefer-arrow-callback': 'error',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'react/jsx-props-no-spreading': 0,
      'import/extensions': 'off',
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'all',
          arrowParens: 'always',
          printWidth: 100,
        },
      ],
    },
  };
  