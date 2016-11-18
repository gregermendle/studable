import express from 'express';
import path from 'path';
import config from './config/config';
import winston from 'winston';

let app = express();
let router = express.Router();
const INDEX_PATH = path.join(__dirname, 'client', 'index.html');

router.get('/', function(req, res, next) {
  res.sendFile(INDEX_PATH);
});

app.use(router);
let server = app.listen(config.port, function() {
  winston.log('info', 'Connection established on port: ' + config.port);
});
