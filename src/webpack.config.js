import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const isProduction = process.env.NODE_ENV === 'production';
let ENTRY;

if (isProduction) {
  ENTRY = ['./app.jsx'];
} else {
  ENTRY = ['./app.jsx', 'webpack-hot-middleware/client'];
}
const CONTEXT_PATH = path.join(__dirname, '..', 'src', 'client');
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?cacheDirectory', 'eslint-loader']
      }, {
        test: /\.(less|css)$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css')
  ]
};

export default webpackConfig;
