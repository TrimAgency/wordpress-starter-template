const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: ['./assets/js/app/app.ts', './assets/sass/style.scss'],
  output: {
    filename: 'bundle.min.js',
    publicPath: '/wp-content/themes/trim-starter/assets/js/',
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
    // Minifiy the compiled js file
    new webpack.optimize.UglifyJsPlugin(),
    // Output a unminified compiled js file
    new UnminifiedWebpackPlugin(),
    // Output compiled CSS file from all SCSS files
    new ExtractTextPlugin({
      filename: '/assets/css/style.css',
      allChunks: true,
    })
  ]
};