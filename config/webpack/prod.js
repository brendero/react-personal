const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

const devConfig = require('./dev');

module.exports = merge(devConfig, {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../../public'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].chunk.js',
    publicPath: './'
  },
  devtool: 'source-map',
})