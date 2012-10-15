var Model = require('scuttlebutt/model');
var model = new Model;

var shoe = require('shoe');
var sock = shoe(function (stream) {
    stream.pipe(model.createStream()).pipe(stream);
});

// ./peer.sh

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    if (req.url === '/_replicate') {
        req.pipe(model.createStream()).pipe(res);
        return;
    }
    else if (req.url === '/') {
        res.setHeader('content-type', 'text/html');
        return fs.createReadStream(__dirname + '/static/index.html').pipe(res);
    }
    else if (req.url === '/bundle.js') {
        res.setHeader('content-type', 'text/javascript');
        return fs.createReadStream(__dirname + '/static/bundle.js').pipe(res);
    }
    
    var key = req.url.split('=')[0];
    var value = req.url.split('=')[1];
    
    if (value === undefined) {
        res.end(model.get(key) + '\n');
    }
    else {
        model.set(key, value);
        res.end(key + '=' + value + '\n');
    }
});
sock.install(server, '/sock');

server.listen(Number(process.argv[2]));

var request = require('request');
process.argv.slice(3).map(Number).forEach(function (port) {
    var r = request.put('http://localhost:' + port + '/_replicate');
    r.pipe(model.createStream()).pipe(r);
});
