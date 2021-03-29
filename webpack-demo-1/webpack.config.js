var path = require('path');
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  }
};