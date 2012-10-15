var EventEmitter = require('events').EventEmitter;
var em = new EventEmitter;

var JSONStream = require('JSONStream');
var emitStream = require('emit-stream');

var ecstatic = require('ecstatic')(__dirname + '/static');
var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url === '/stream') {
        var es = emitStream(em).pipe(JSONStream.stringify());
        es.pipe(res);
    }
    else ecstatic(req, res)
});
server.listen(8005);

setInterval(function () {
    em.emit('beep', 'boop');
}, 100);

// ./run2.sh
