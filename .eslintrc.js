module.exports = {
  root: true,
  // 运行环境
  env: {
    browser: true,
    node: true
  },
  // 解析器配置选项
  parserOptions: {
    ecmaVersion: 2020
  },
  // 规则继承
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    'plugin:prettier/recommended'
  ],
  // 覆盖一些规则
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
