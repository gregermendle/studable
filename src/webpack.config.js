import webpack from 'webpack';
import path from 'path';

const ENTRY = ['./app.jsx', 'webpack-hot-middleware/client'];
const CONTEXT_PATH = path.join(__dirname, 'client');
const OUTPUT_PATH = path.join(__dirname, 'public');
const OUTPUT_FILENAME = 'bundle.js';

const webpackConfig = {
  entry: ENTRY,
  context: CONTEXT_PATH,
  resolve: ['', '.js', '.jsx', '.css', '.less', '.es6'],
  devtool: 'source-map',
  output: {
    path: OUTPUT_PATH,
    filename: OUTPUT_FILENAME,
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel?cacheDirectory'
      }, {
        test: /\.less|\.css/,
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
