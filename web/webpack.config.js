const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => {
  return {
    entry: './src/index.js',
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, 'build'),
      filename: 'bundled.js',
    },
    devServer: {
      hot: true,
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.jpe?g|png|gif|svg$/,
          loader: 'file-loader?name=[path][name].[ext]',
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      extensions: ['.jsx', '.js'],
    },
  }
}
