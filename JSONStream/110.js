var http = require('http');
var fs = require('fs');
var ecstatic = require('ecstatic')(__dirname + '/static');

var server = http.createServer(function (req, res) {
    if (req.url === '/data') {
        fs.createReadStream('citylots.json').pipe(res);
    }
    else ecstatic(req, res);
});
server.listen(8005);
