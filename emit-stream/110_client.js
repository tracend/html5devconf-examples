var request = require('request');
var emitStream = require('emit-stream');
var JSONStream = require('JSONStream');

var stream = request('http://localhost:8005/stream');
var e = emitStream(stream.pipe(JSONStream.parse([true])));
