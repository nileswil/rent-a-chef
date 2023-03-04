const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/client.js',
  mode: 'development',

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  devServer: {
    static: {
      directory: '/build',
      publicPath: path.resolve(__dirname, 'build'),
    },
    historyApiFallback: true,
    proxy: [
      {
        context: [],
        target: 'http://localhost:3000', //makes calls from 8080 to 3000 for / endpoints
      },
    ],
  },

  plugins: [ //req'd for dev server to display HTML content
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS (requires node-sass module as well)
          "sass-loader",
        ],
      },
    ],
  },
}
