const merge = require('webpack-merge')
const common = require('./webpack.common')
module.exports = merge(common, {
  entry: '../src/index.ts', // 入口文件
  mode: 'production',
})
