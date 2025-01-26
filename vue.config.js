const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  publicPath: '/ifeellow/',
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    }
  },
  chainWebpack: config => {
    config.plugin('copy').tap(([options]) => {
      options.patterns.push({
        from: path.resolve(__dirname, 'public/breathing-animation.lottie'),
        to: path.resolve(__dirname, 'dist')
      })
      return [options]
    })
    
    config.plugin('html').tap(args => {
      args[0].title = 'ifeellow - Psychological Support';
      return args;
    })
  }
})
