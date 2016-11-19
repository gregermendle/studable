import express from 'express';
import path from 'path';
import config from './config/config';
import winston from 'winston';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from './webpack.config';

let app = express();
let router = express.Router();
const INDEX_PATH = path.join(__dirname, 'public', 'index.html');
const PUBLIC_PATH = path.join(__dirname, 'public');

/*
  Basic router serves index.html file with react root component
*/
router.get('/', function(req, res, next) {
  res.sendFile(INDEX_PATH);
});

/*
  Webpack middleware configuartion
*/
let compiler = webpack(webpackConfig);
app.use(webpackHotMiddleware(compiler));
app.use(webpackDevMiddleware(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}));

/*
  Apply middleware to app and start server
*/
app.use('/', express.static(PUBLIC_PATH));
app.use(router);
let server = app.listen(config.port, function() {
  winston.log('info', 'Connection established on port: ' + config.port);
});
