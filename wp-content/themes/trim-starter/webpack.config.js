var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./assets/js/app/app.ts', './assets/sass/style.scss'],
  output: {
    filename: 'development.js',
    path: __dirname + '/assets/js/'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
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
    new ExtractTextPlugin({
      filename: '/assets/css/style.css',
      allChunks: true,
    }),
  ],
};