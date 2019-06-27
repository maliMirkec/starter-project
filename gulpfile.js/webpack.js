const { helpers } = require('./helpers')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index: helpers.parse('helpers.source/config.js.src/index.js'),
    deferredStyles: helpers.parse('helpers.source/config.js.src/deferredStyles.js'),
    foftFontLoading: helpers.parse('helpers.source/config.js.src/foftFontLoading.js')
  },
  output: {
    path: path.resolve(`${__dirname}/${helpers.parse('helpers.dist/config.js.dist/')}`),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      }
    ]
  }
}
