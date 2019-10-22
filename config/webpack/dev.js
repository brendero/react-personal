const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../../dist/js'),
    filename: 'main.bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'source-map-loader']
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
			},
			{
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]'
          }
        }],
      } 
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  externals: {
		'React': 'react',
		'ReactDOM': 'react-dom'
	},
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Brent De Roeck',
      favicon: "./src/assets/favicon-32x32.png",
      // inject: false
    }),
    new HtmlWebpackRootPlugin(),
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'Brent De Roeck Webdeveloper',
      short_name: 'Brent De Roeck',
      description: 'Brent De Roeck personal website',
      // icons: [
      //   {
      //     src: 'favicon-32x32.png',
      //     sizes: '32x32',
      //     type: 'image/png'
      //   }
      // ],
      display: 'standalone',
      start_url: './index.html'
    })
  ]
}