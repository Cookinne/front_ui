// 代码热更新(CSS热更新, JS热更新)
// sourcemap
// 添加后端指向API

const merge = require('webpack-merge');
const webpack = require('webpack');

const baseConfig = require('./webpack.config.base');

const API_URL = process.env.API_URL || 'http://127.0.0.1:8000';
const BIND_HOST = process.env.BIND_HOST || 'localhost';
const BIND_PORT = process.env.BIND_PORT || 9901;

const devConfig = {
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: '../dist',
    historyApiFallback: true,
    open: true,
    hot: true,
    host: BIND_HOST,
    port: BIND_PORT,
    proxy: {
      '/api': {
        target: API_URL,
        pathRewrite: { '^/api': '/api' },
        changeOrigin: true,
        secure: false,
        cookieDomainRewrite: 'localhost',
      },
      '/static/data': {
        target: API_URL,
        changeOrigin: true,
        secure: false,
        cookieDomainRewrite: 'localhost',
      },
      '/mock': {
        target: 'http://yapi.insight.ecc.huobiapps.com',
        pathRewrite: { '^/mock': '/mock' },
        changeOrigin: true,
        secure: false,
        cookieDomainRewrite: 'localhost',
      },
    },
    stats: 'errors-only',
  },
  devtool: 'cheap-module-eval-source-map',
};

module.exports = merge(baseConfig, devConfig);
