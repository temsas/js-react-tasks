const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "images", to: "images" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
