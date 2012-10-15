var EventEmitter = require('events').EventEmitter;
var em = new EventEmitter;

var emitStream = require('emit-stream');
var stream = emitStream(em);

stream.on('data', function (x) {
    console.dir(x);
});
