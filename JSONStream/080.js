var JSONStream = require('JSONStream');
var request = require('request');

var parser = JSONStream.parse([ 'features', true, 'geometry', 'coordinates' ]);

parser.on('data', function (coords) {
    console.dir(coords);
});

request('http://localhost:8005').pipe(parser);
