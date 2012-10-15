var http = require('http');
var ecstatic = require('ecstatic')(__dirname + '/static');

var server = http.createServer(ecstatic);
server.listen(8005);

var shoe = require('shoe');
var dnode = require('dnode');

var sock = shoe(function (stream) {
    var d = dnode({
        // ...
    });
    d.pipe(stream).pipe(d);
});
sock.install(server, '/dnode');
