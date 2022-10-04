const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',    
    entry: {
      login: ['./src/client/login.scss'],
      upload: ['./src/client/upload.scss'],
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