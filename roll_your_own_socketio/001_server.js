var http = require('http');

var server = http.createServer(require('ecstatic')(__dirname + '/static'));
server.listen(8005);
