var JSONStream = require('JSONStream');
var fs = require('fs');

var parser = JSONStream.parse([ 'features', true, 'geometry', 'coordinates' ]);

parser.on('data', function (coords) {
    console.dir(coords);
});

fs.createReadStream('citylots.json').pipe(parser);
