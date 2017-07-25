var webpack = require("webpack");
var path = require("path");

module.exports = {
  context: path.join(__dirname, "app"),
  entry: {
    app: "./index.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "http://localhost:8080/"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    publicPath: "http://localhost:8080/"
  }
};
