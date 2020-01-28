var webpack = require("webpack");
var version = require("./package.json").version;
var path = require('path');
var banner =
  "/**\n" +
  " * vue-markdown for Konishi" +
  " * https://github.com/X1Zeth2X/vue-markdown-konishi\n" +
  " * MIT License\n" +
  " */\n";

module.exports = {
  mode: 'production',
  entry: "./src/VueMarkdown.js",
  target: "node",
  output: {
    path: path.join(__dirname,"./dist"),
    filename: "vue-markdown.common.js",
    library: "VueMarkdown",
    libraryTarget: "umd"
  },
  externals: /^[^.]/,
  plugins: [
    new webpack.BannerPlugin(banner)
  ],
  module: {
    rules: [{
      test: /\.vue$/,
      loader: "vue-loader"
    }, {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: ['vue-style-loader', 'css-loader']
      }]
  },
}