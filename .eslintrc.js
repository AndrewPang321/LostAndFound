module.exports = {
  root: true,
  env: {
    node: true
  },
  'plugins': [
    'security',
  ],
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:security/recommended',
  ],
  'env': {
    'node': true
  },
  rules: {
    'indent': [2, 4],
    'max-len': [2, { code: 120, ignoreUrls: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

