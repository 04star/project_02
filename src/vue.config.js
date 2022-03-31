const proxyObj = {}
proxyObj['/'] = {
  target: 'http://localhost:8085',
  changeOrigin: true,
  pathRewrite: {
    '^/': ''
  }
}
module.exports = {
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 75
          })
        ]
      }
    }
  },
    devServer: {
    host: 'localhost',
    port: 8081,
    proxy: proxyObj
  }
}
const px2rem = require('postcss-px2rem')
 
// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16
})
 
// 使用等比适配插件
module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
}