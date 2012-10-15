var http = require('http');
var server = http.createServer(/* ... */);
server.listen(8005);

var shoe = require('shoe');
var sock = shoe(function (stream) {
    // ...
});
sock.install(server, '/sock');
