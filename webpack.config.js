const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    path: path.resolve(__dirname, './src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    clean: true,
  },
  module: {
    rules: [
      // Loading TS + JS
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      // Loading CSS
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
      // Loading images
      {
        test: /\.(jpg|png|gif|svg)$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
      // Loading fonts
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
    ],
  },                            
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 3001,
    open: true,
    hot: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
    plugins: [new TsconfigPathsPlugin()],
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './src/index.html' }),
    new ForkTsCheckerWebpackPlugin(),
    new ESLintPlugin({
      extensions: ["tsx", "ts", 'js'],
    }),
  ],
}
