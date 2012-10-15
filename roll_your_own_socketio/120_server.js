var http = require('http');
var EventEmitter = require('events').EventEmitter;

var server = http.createServer(require('ecstatic')(__dirname + '/static'));
server.listen(8005);

var shoe = require('shoe');
var emitStream = require('emit-stream');
var JSONStream = require('JSONStream');

var sock = shoe(function (stream) {
    var ev = new EventEmitter;
    emitStream(ev)
        .pipe(JSONStream.stringify())
        .pipe(stream)
    ;
    
    var i = 0;
    setInterval(function () {
        ev.emit('upper', i++ % 2);
    }, 100);
});

sock.install(server, '/sock');
