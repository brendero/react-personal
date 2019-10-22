const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

const devConfig = require('./dev');

module.exports = merge(devConfig, {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].chunk.js',
    publicPath: './'
  },
  devtool: 'source-map',
})