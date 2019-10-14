
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//
const HtmlInlineCssWebpackPlugin= require('html-inline-css-webpack-plugin').default;// 把css单独抽离出文件 js和css并行加载更快


module.exports = {
  mode:"development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules:[
        {
            test:/\.css$/,
            // use:['style-loader','css-loader']
            // loader: MiniCssExtractPlugin.loader
            use:[MiniCssExtractPlugin.loader,'css-loader']
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 50000,
              },
            },
          ],
        },
        {
            test: /\.(html|htm)$/,
            use: 'html-withimg-loader'
        }

    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
      }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlInlineCssWebpackPlugin()
  ],
  devServer:{
      port:9000
  }
};
