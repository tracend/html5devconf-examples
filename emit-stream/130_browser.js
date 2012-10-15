var request = require('request');
var emitStream = require('emit-stream');
var JSONStream = require('JSONStream');

var stream = request('http://localhost:8005/stream');
var e = emitStream(stream.pipe(JSONStream.parse([true])));

e.on('beep', function (x) {
    var div = document.createElement('div');
    div.textContent = 'beep :: ' + x;
    document.body.appendChild(div);
});

// ./run5.sh
