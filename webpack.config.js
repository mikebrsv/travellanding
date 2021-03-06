const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const images = require('./rules/images.js');
const pug = require('./rules/pug.js');
const sass = require('./rules/sass.js');
const videos = require('./rules/videos.js');

module.exports = {
  // mode: 'development',
  mode: 'production',

  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },

  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/script.js'
  },

  module: {
    rules: [
      images,
      pug,
      sass,
      videos,
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/pug/index.pug',
      minify: true,
      inject: false,
    }),

    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
  ]
};
