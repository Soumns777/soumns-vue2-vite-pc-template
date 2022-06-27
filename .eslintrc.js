module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/strongly-recommended', 'standard'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'space-before-function-paren': 0,
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 5
        },
        multiline: {
          max: 1
        }
      }
    ]
  }
}
