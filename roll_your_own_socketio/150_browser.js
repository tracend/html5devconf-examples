var shoe = require('shoe');
var emitStream = require('emit-stream');
var JSONStream = require('JSONStream');

var stream = shoe('/sock');

stream.on('data', function (buf) {
    document.body.textContent += buf;
});
