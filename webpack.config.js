var webpack = require('webpack');

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

// index.html
var indexHtml = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: './src/index.html',
  inject: false
});

module.exports = {
  entry : {
    "vendor" : 'zone.js',
    "entry" : './src/ts/app/entry.ts'
  },
  output : {
    filename : '[name].js',
    path : path.resolve(__dirname, 'dist')
  },

  module : {
    rules : [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },

  plugins: [
    indexHtml,
    new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, './client'))
  ],

  resolve: {
    extensions: [".ts", ".js"]
  }
}

