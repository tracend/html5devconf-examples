var http = require('http');
var server = http.createServer(require('ecstatic')(__dirname + '/static'));
server.listen(8005);

var shoe = require('shoe');
var sock = shoe(function (stream) {
    stream.pipe(process.stdout, { end : false });
});
sock.install(server, '/sock');

// ./run1.sh
