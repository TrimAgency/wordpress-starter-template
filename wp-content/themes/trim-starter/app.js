/**
 * Require Browsersync along with webpack and middleware for it
 */
const browserSync          = require('browser-sync').create();
const webpack              = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const stripAnsi            = require('strip-ansi');
/**
 * Require ./webpack.config.js and make a bundler from it
 */
const webpackConfig = require('./webpack.config');
const bundler       = webpack(webpackConfig);

/**
 * Run Browsersync and use middleware for Hot Module Replacement
 */
browserSync.init({
    open: false,
    logFileChanges: true,
    proxy: 'http://localhost:8000',
    middleware: [
        webpackDevMiddleware(bundler, {
            publicPath: webpackConfig.output.publicPath, 
            stats: {colors: true}
        }),

        webpackHotMiddleware(bundler)
    ],
    files: [
        '**/*.php',
        '**/*.css'
    ]
});