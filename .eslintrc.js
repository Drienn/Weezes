module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ['react'],
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'comma-dangle': 0
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.7.0'
    }
  }
};
