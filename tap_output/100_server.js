var http = require('http');
var ecstatic = require('ecstatic')(__dirname + '/static');
var server = http.createServer(ecstatic);
server.listen(8005);

var shoe = require('shoe');
var sock = shoe(function (stream) {
    stream.pipe(process.stdout, { end : false });
});
sock.install(server, '/sock');

// ./run3.sh
