const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 5175,
  },
  output: {
    publicPath: "http://localhost:5175/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "pricing",
      filename: "remoteEntry.js",
      exposes: {
        "./Pricing": "./src/Pricing",
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
