const path = require('path');

module.exports = {
  entry: './src/stylesheets/index.css',
  output: {
    filename: 'bundle.css',
    path: path.resolve(__dirname, 'src')
  }
};
