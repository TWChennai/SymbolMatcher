const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/loop.js',
    output: {
        filename: 'source.bundle.js',
        path: path.resolve(__dirname, 'dist')
      },
      module: {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
          ]
        }
  };
