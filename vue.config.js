const webpack = require('webpack');
module.exports = {
  proxyTable: {
    '/api': {
      //使用"/api"来代替"http://f.apiplus.c"
      target: 'http://api.s1.g3user.com', //源地址
      changeOrigin: true, //改变源
      pathRewrite: {
        '^/api': 'http://api.s1.g3user.com' //路径重写
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',

        jQuery: 'jquery',

        'windows.jQuery': 'jquery'
      })
    ]
  }
};
