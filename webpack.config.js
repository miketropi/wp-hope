const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    backend: path.join(__dirname, "src", "backend.js"),
    main: path.join(__dirname, "src", "main.js"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "hope-[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /.(css|scss|less)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "hope-[name].css",
      chunkFilename: "hope-[id].css"
    })
  ]
}