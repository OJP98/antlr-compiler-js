module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    curly: 0,
    'nonblock-statement-body-position': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    'except-parens': 0,
  },
};
