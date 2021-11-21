'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'yww的博客'
        return args
      })
  },
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:9000',
        ws: false,
        changeOrigin: true
      }
    }
  }
}
