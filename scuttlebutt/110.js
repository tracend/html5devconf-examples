var Model = require('scuttlebutt/model');
var model = new Model;

var shoe = require('shoe');
var sock = shoe(function (stream) {
    // ...
});

var http = require('http');
var server = http.createServer(/* ... */);

server.listen(Number(process.argv[2]));

var request = require('request');
process.argv.slice(3).map(Number).forEach(function (port) {
    var r = request.put('http://localhost:' + port + '/_replicate');
    r.pipe(model.createStream()).pipe(r);
});
