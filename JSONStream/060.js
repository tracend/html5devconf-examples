var JSONStream = require('JSONStream');

var parser = JSONStream.parse([ 'features', true, 'geometry', 'coordinates' ]);

parser.on('data', function (coords) {
    console.dir(coords);
});
