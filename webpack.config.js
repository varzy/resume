'use strict';

const webpack = require("webpack");
const path = require('path');

module.exports = {
  devtool: "sourcemap",
  context: __dirname + "/src",
  entry: './js/_entry.js',
  output: {
    path: path.resolve(__dirname, 'src/_dist'),
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
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  }

};
