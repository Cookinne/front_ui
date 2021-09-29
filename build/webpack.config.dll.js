const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    library: ['react', 'react-dom', 'react-router-dom', 'redux'],
  },
  output: {
    filename: '[name]_[hash].dll.js',
    path: path.resolve(__dirname, '../lib'),
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.resolve(__dirname, '../lib/[name].json'),
    }),
  ],
};
