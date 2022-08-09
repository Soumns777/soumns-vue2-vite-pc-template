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
    indent: ['off', 2],
    'no-unused-expressions': 0, //禁止无用的表达式
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'any',
          component: 'any'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'no-sequences': 0,
    'space-before-function-paren': 0,
    'array-callback-return': 0,
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 10
        },
        multiline: {
          max: 1
        }
      }
    ]
  }
}
