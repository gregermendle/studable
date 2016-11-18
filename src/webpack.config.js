import webpack from 'webpack';
import path from 'path';

const ENTRY = ['./app.jsx', 'webpack-hot-middleware/client'];
const CONTEXT_PATH = path.join(__dirname, 'client');
const OUTPUT_PATH = path.join(__dirname, 'public');
const OUTPUT_FILENAME = 'bundle.js';
const ESLINT_CONFIG_PATH = path.join(__dirname, '..', '.eslintrc');

const webpackConfig = {
  entry: ENTRY,
  context: CONTEXT_PATH,
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.less', '.es6']
  },
  devtool: 'source-map',
  output: {
    path: OUTPUT_PATH,
    filename: OUTPUT_FILENAME,
    publicPath: '/'
  },
  eslint: {
    configFile: ESLINT_CONFIG_PATH
  },
  module: {
    loaders: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel?cacheDirectory', 'eslint']
      }, {
        test: /\.less|\.css$/,
        exclude: /node_modules/,
        loader: 'style!css!less'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

export default webpackConfig;
