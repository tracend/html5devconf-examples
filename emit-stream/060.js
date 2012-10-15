var EventEmitter = require('events').EventEmitter;
var em = new EventEmitter;

var JSONStream = require('JSONStream');
var emitStream = require('emit-stream');
var stream = emitStream(em).pipe(JSONStream.stringify());

stream.pipe(process.stdout);

setInterval(function () {
    em.emit('beep', 'boop');
}, 100);

// ./run1.sh
