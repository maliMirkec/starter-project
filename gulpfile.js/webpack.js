const path = require('path');
const { helpers } = require('./helpers');

module.exports = {
  mode: 'production',
  entry: {
    index: helpers.parse('helpers.source/config.js.src/index.js'),
  },
  output: {
    path: path.resolve(`${__dirname}/${helpers.parse('helpers.dist/config.js.dist/')}`),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
          },
        },
      },
    ],
  },
};
