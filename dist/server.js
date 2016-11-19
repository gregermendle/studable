'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var router = _express2.default.Router();
var INDEX_PATH = _path2.default.join(__dirname, 'client', 'index.html');

router.get('/', function (req, res, next) {
  res.sendFile(INDEX_PATH);
});

app.use(router);
var server = app.listen(_config2.default.port, function () {
  _winston2.default.log('info', 'Connection established on port: ' + _config2.default.port);
});