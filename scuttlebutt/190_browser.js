var Model = require('scuttlebutt/model');
var model = new Model;

var shoe = require('shoe');
var stream = shoe('/sock');

stream.pipe(model.createStream()).pipe(stream);

var keys = {};
model.on('update', function (key, value, source) {
    if (!keys[key]) {
        // ...
    }
});
