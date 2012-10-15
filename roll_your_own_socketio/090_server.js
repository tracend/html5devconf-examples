var http = require('http');
var EventEmitter = require('events').EventEmitter;

var server = http.createServer(require('ecstatic')(__dirname + '/static'));
server.listen(8005);

var shoe = require('shoe');

var sock = shoe(function (stream) {
    var ev = new EventEmitter;
    
    var i = 0;
    setInterval(function () {
        ev.emit('upper', i++ % 2);
    }, 100);
});

sock.install(server, '/sock');
