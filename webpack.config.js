// jshint esversion: 6

process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
// process.env.NODE_ENV = 'development';
const webpack = require('webpack');

module.exports = {
  entry: './home',
  output: {
    filename: 'build.js'
  },
  watch: process.env.NODE_ENV == 'development',

  watchOption: {
    aggregateTimeout: 200
  },

  // devtool: process.env.NODE_ENV == 'development' ? 'eval' : null,

  plugins: [
    new webpack.EnvironmentPlugin('NODE_ENV'),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // need .babelrc with 'es2015' preset written down in it
        loader: 'babel',
        query: {
          // optional: ['runtime'],
          plugins: ['transform-runtime'],
        }
      }
    ]
  },
};
