'use strict';

const webpack = require("webpack");
const path = require('path');

module.exports = {
  devtool: "sourcemap",
  // context: __dirname + "/src",
  entry: './src/js/_entry.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        loader: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ['env'],
          plugins: ['transform-runtime']
        }
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]',
          outputPath: './img/',
          publicPath: ''
        }
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
};
