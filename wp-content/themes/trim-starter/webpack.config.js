const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['./assets/js/app/app.ts', './assets/sass/style.scss'],
  output: {
    filename: 'bundle.min.js',
    path: __dirname + '/assets/js/'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'awesome-typescript-loader'
      },
      {
        test: /\.ts$/,
        use: 'awesome-typescript-loader'
      },
      { 
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new UnminifiedWebpackPlugin(),
    new ExtractTextPlugin({
      filename: '/assets/css/style.css',
      allChunks: true,
    }),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8888/'
      },
      {
        reload: true
      }
    )
  ],
};