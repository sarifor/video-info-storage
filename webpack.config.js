const path = require('path');

module.exports = {
    mode: 'development',    
    entry: {
      test: './src/client/test.js',
      test2: './src/client/test2.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'assets'),
    },
  };