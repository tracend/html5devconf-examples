var http = require('http');
var server = http.createServer(require('ecstatic')(__dirname + '/static'));
server.listen(8005);

var through = require('through');

var shoe = require('shoe');
var sock = shoe(function (stream) {
    var up = false;
    stream.pipe(through(function (s) {
        this.emit('data', up ? s.toUpperCase() : s.toLowerCase());
        up = !up;
    })).pipe(stream);
});
sock.install(server, '/sock');
