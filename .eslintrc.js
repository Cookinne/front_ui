module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    document: true,
    localStorage: true,
    window: true,
    require: true,
    module: true,
    __dirname: true,
    http: true,
    process: true,
    exports: true,
    ActiveXObject: true,
  },
  extends: [
    'airbnb',
    // "plugin:prettier/recommended" // prettier配置
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      // 'experimentalObjectRestSpread': true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': 'off',
    'class-methods-use-this': 'off',
    'no-restricted-syntax': 'off',
    'object-shorthand': 'off',
    'func-names': 'off',
    'no-unused-expressions': 'off',
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-var': 'error',
    'react/destructuring-assignment': 0,
    'prefer-arrow-callback': 'warn',
    'prefer-template': 'error',
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-extend-native': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'function-paren-newline': 0,
    'jsx-a11y/no-autofocus': [
      2,
      {
        ignoreNonDOM: true,
      },
    ],
    'jsx-a11y/click-events-have-key-events': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // airbnb对于jsx必须写在jsx文件中的设置
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/no-static-element-interactions': 0,
    camelcase: 0,
    'react/forbid-prop-types': 0,
    'import/no-unresolved': 2,
    "react/prop-types": "off"
  },
  settings: {
    'import/resolver': {
      "webpack": {
        "config": "./build/webpack.config.base.js"
        }
    },
  },
};
