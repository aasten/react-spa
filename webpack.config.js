// jshint esversion: 6

process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
// process.env.NODE_ENV = 'development';
const webpack = require('webpack');

module.exports = {
  entry: [
    // 'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js'
  },
  watch: process.env.NODE_ENV == 'development',

  watchOption: {
    aggregateTimeout: 200
  },

  // devtool: process.env.NODE_ENV == 'development' ? 'eval' : null,
  devtool: process.env.NODE_ENV == 'development' ? 'cheap-module-source-map' : null,
  plugins: [
    // making NODE_ENV available in any source in this project
    new webpack.EnvironmentPlugin('NODE_ENV'),
  ],

  // resolve: {
  //   modulesDirectories: ['node_modules'],
  //   extensions: ['', '.js']
  // },
  //
  // resolveLoader: {
  //   modulesDirectories: ['node_modules'],
  //   moduleTemplates: ['*-loader', '*'],
  //   extensions: ['','*.js']
  // },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // need .babelrc with 'es2015' preset written down in it
        loader: 'babel-loader',
          // optional: ['runtime'],
        plugins: ['transform-runtime'],
      },
      // making .css files available for importing in .js
      {
        test:/\.css$/,loader:'style!css!'
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)/, loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]' }
    ],
    // rules: [
    //   // making .css files available for importing in .js
    //   {
    //     test: /\.css$/,
    //     use: ['style-loader', 'css-loader']
    //   }
    // ]
  },
};
