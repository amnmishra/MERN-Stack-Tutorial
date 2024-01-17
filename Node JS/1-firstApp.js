var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('HIiii    ');
}).listen(9000);

/** 
Run Program
node './1-firstApp.js'

*/