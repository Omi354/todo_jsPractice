const { devtools } = require("globals");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: `${__dirname}/dist/`,
    filename: "bundle.js",
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        // 拡張子 css のファイル（正規表現）;
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  target: ["web", "es5"],
};
