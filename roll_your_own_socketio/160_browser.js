var shoe = require('shoe');
var emitStream = require('emit-stream');
var JSONStream = require('JSONStream');

var parser = JSONStream.parse([true]);
var stream = shoe('/sock');

stream.on('data', function (buf) {
    document.body.textContent += buf;
});
