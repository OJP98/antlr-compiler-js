const path = require('path');

module.exports = {
  entry: './src/index.js',
  resolve: { fallback: { fs: false } },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};