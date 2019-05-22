// entry -> output
const path = require("path");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname,"public"),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loaders: "babel-loader",
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
}