var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlPlugin = require('html-webpack-plugin');
var Webpack = require('webpack');

var PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  modules: path.resolve(__dirname, 'node_modules')
};

module.exports = {
  entry: {
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
    app: './src/main.ts'
  },
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: '[name].js',
    sourceMapFileName: '[name].map',
    chunkFilename: '[id].chunk.js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    preLoaders: [
      // {
      //   test: /\.js$/,
      //   loader: 'source-map-loader',
      //   include: PATHS.modules,
      //   exclude: [
      //     path.join(PATHS.modules, '@angular'),
      //     path.join(PATHS.modules, 'rxjs')
      //   ]
      // }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['babel?cacheDirectory', 'ts'],
        include: PATHS.src
      },
      // For global stylesheet
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass?sourceMap'),
        include: PATHS.src,
        exclude: path.join(PATHS.src, 'app')
      },
      // Per-component stylesheets
      {
        test: /\.scss$/,
        loaders: ['raw', 'postcss', 'sass?sourceMap'],
        include: path.join(PATHS.src, 'app')
      },
      {
        test: /\.html$/,
        loader: 'html',
        include: PATHS.src
      }
    ],
    noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/, /.+zone\.js\/lib\/.+/]
  },
  resolve: {
    root: PATHS.src,
    modulesDirectories: ['node_modules'],
    extensions: ['', '.ts', '.js']
  },
  postcss:[
    autoprefixer({
      browsers: [
        'last 2 versions',
        'iOS >= 7',
        'Android >= 4',
        'Explorer >= 10',
        'ExplorerMobile >= 11'
      ],
      cascade: false
    })
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    host: process.env.HOST,
    port: process.env.PORT || 3000
  },
  plugins: [
    new Webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new ExtractTextPlugin('[name].css'),
    new HtmlPlugin({ template: './src/index.html' }),
    new Webpack.HotModuleReplacementPlugin()
  ]
};
