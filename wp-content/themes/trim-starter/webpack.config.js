const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const extractCSS = new ExtractTextPlugin({ filename: 'style.css'});

module.exports = {
  entry: [ 'webpack-hot-middleware/client',
           './assets/js/app/app.ts', 
           './assets/sass/style.scss'],
  output: {
    filename: 'bundle.min.js',
    publicPath: '/wp-content/themes/trim-starter/assets/js/',
    path: __dirname + '/assets/js/'
  },
  resolve: {
    extensions: ['.ts', '.js', '.scss']
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
        //test: /\.(sass|scss)$/,
        //use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.scss$/, // files ending with .scss
        use: ['css-hot-loader'].concat(extractCSS.extract({
           fallback: [ 'style-loader' ],
           use: ['css-loader', 'sass-loader'],
           publicPath: '/wp-content/themes/trim-starter/assets/css/'
        })),
      },
    ]
  },
  plugins: [
    // Output a unminified compiled js file
    new UnminifiedWebpackPlugin(),
    // Output compiled CSS file from all SCSS files
    extractCSS,
    // Minifiy the compiled js file
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};