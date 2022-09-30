const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',    
    entry: {
      layout: ['./src/client/layout.scss'],
      test3: ['./src/client/test3.scss'],
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'assets'),
    },
    module: {
      rules: [
          {
              test: /\.scss$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],    
          }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],      
  };