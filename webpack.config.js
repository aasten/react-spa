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
        test:/\.css$/,
        // loader: combineLoaders([
        // {
        //   loader: 'style-loader'
        // }, {
        //   loader: 'css-loader',
        //   query: {
        //     modules: true,
        //     localIdentName: '[name]__[local]___[hash:base64:5]'
        //   }
        //  }
        // ])
        loader:'style!css-loader?localIdentName=%5Bname%5D__%5Blocal%5D--%5Bhash%3Abase64%3A5%5D'
        // loader:'style!css-loader'
        // loader:'style!css-loader?modules=true&localIdentName=%5Bname%5D__%5Blocal%5D--%5Bhash%3Abase64%3A5%5D'
      },
      { test: /\.(png)$/, loader: 'url-loader?limit=100000' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000" },
      // { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      // { test: /\.(woff|woff2)$/, loader: 'url-loader?limit=100000&name=[name]-[hash].[ext]' }
    ],
  },

  devServer: {
      historyApiFallback: true
  }
  // devServer: {
  //   historyApiFallback: true,
  //   watchOptions: { aggregateTimeout: 300, poll: 1000 },
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  //     "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  //   }
  // },

};
