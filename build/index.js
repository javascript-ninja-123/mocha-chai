"use strict";

var _express = _interopRequireDefault(require("express"));

require("@babel/polyfill");

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.get('/', function (req, res) {
  res.send({
    message: 'hi'
  });
});
app.get('/404', function (req, res) {
  res.status(500).end('error');
});
app.listen(8080, function () {
  return console.log('listening');
});