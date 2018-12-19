module.exports = {
  env: { node: true, browser: true, es6: true },
  parser: 'babel-eslint',
  extends: ['airbnb'],
  plugins: ['prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'class-methods-use-this': 0,
    'import/no-unresolved': 0,
    'no-nested-ternary': 0,
  },
};
