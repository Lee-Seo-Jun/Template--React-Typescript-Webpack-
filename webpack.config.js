const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniSccExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");


module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  optimization:{minimizer: []},

  output : {
      path : path.resolve(__dirname, "dist"),
      filename: 'main.js'
  },

  devServer: {
      static: "./dist",
      //dist 파일에 업데이트가 발생할 때 마다
      hot: true,
      //런타임에 모듈을 업데이트 한다.
      port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniSccExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.jpg$/,
        use: ['file-loader']
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // 웹팩 실행시마다 dist 폴더 정리
    new HtmlWebpackPlugin({
      //index.html 자동 생성되도록 template 옵션 설정
      template: "./src/index.html",
    }),
    new MiniSccExtractPlugin({
      filename: "common.css",
    }),
  ],
  watch: true,
};