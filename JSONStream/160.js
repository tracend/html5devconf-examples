// browser version

var JSONStream = require('JSONStream');
var request = require('request');

var parser = JSONStream.parse([ 'features', true, 'geometry', 'coordinates' ]);

parser.on('data', function (coords) {
    var div = document.createElement('div');
    div.textContent = JSON.stringify(coords);
    document.body.appendChild(div);
});

request('http://localhost:8005/data').pipe(parser);
