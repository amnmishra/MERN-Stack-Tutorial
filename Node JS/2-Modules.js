/**
    Consider modules to be the same as JavaScript libraries.
    A set of functions you want to include in your application.
 */

var http = require('http');
var dt = require('./refrence');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time is currently: " + dt.myDateTime());
  res.end();
}).listen(1100);