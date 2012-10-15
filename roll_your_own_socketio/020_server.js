var http = require('http');

var server = http.createServer(require('ecstatic')(__dirname + '/static'));
server.listen(8005);

var shoe = require('shoe');

var sock = shoe(function (stream) {
    // ...
});

sock.install(server, '/sock');
