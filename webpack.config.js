const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: "development",
  context: path.join(__dirname),
  entry: {
    'app': path.join(__dirname)
  },
  // entry: {
  //   dnd: path.join(__dirname, 'dnd')
  // },
  output: {
    // path: __dirname,
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'dnd.js'
    // library: 'Dnd',
    // libraryTarget: 'umd',
    // filename:  'dnd.js'
    //umdNamedDefine: true
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        // query: {
          // "presets": [
            // "@babel/preset-env"
            // ["@babel/preset-env", {
            //   // "useBuiltIns": "entry",
            //   // "corejs": "3",
            //   "targets": {
            //     // "chrome": "58",
            //     // "ie": "11"
            //     // "browsers": "last 2 Chrome versions",
            //     // "node": "current"
            //   }
            // }]
          // ],
        options: {
          "presets": [
            ["@babel/preset-env", {
              // "useBuiltIns": "entry",
              // "corejs": "3",
              "targets": {
                // "chrome": "58",
                // "ie": "11",
                "browsers": "last 2 Chrome versions",
                "node": "current"
              },
            }]
          ],
          "plugins": [
            // "@babel/transform-runtime",
            ["@babel/plugin-transform-runtime", {
              useESModules: true
            }]
            // ["babel-plugin-root-import", {
            //   "rootPathSuffix": "."
            // }]
          ]
        }
      }
    ]
  },
  resolve: {
    modules: [
      "node_modules"
    ],
    extensions: [".js", ".json", ".css"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['app'],
      template: path.resolve(__dirname, 'public', 'index.html'), // 'index.html', // path.resolve(__dirname, 'index.html'),
      filename: 'index.html'
    })
  ],
  devtool: "source-map",
  // target: "web",
  stats: {
    // Nice colored output
    colors: true
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
    https: false,
    noInfo: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
}

module.exports.default = config;