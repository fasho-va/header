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
    }, 
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      loader: 'url-loader?limit=100000' }]
  }
}