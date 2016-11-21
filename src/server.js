import express from 'express';
import path from 'path';
import config from './config/config';
import winston from 'winston';
import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config';

let app = express();
let router = express.Router();
const isProduction = process.env.NODE_ENV === 'production';
const INDEX_PATH = path.join(__dirname, 'public', 'index.html');
const PUBLIC_PATH = path.join(__dirname, 'public');

/*
  Basic router serves index.html file with react root component
*/
router.get('/', function(req, res, next) {
  res.sendFile(INDEX_PATH);
});

/*
  Dev Mode
  Webpack middleware configuartion
*/
if (!isProduction) {
  let compiler = webpack(webpackConfig);
  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));
  app.use('/', express.static(PUBLIC_PATH));
}

/*
  Apply middleware to app and start server
*/
app.use(router);
let server = app.listen(config.port, function() {
  winston.log('info', 'Connection established on port: ' + config.port);
});
