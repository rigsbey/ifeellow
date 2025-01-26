const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/ifeellow/' : '/',
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'ifeellow - Psychological Support';
      return args;
    })
  }
})
