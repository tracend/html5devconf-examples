var http = require('http');
var fs = require('fs');
var ecstatic = require('ecstatic')(__dirname + '/static');
var brake = require('brake');

var server = http.createServer(function (req, res) {
    if (req.url === '/data') {
        fs.createReadStream('citylots.json')
            .pipe(brake(1500))
            .pipe(res)
        ;
    }
    else ecstatic(req, res);
});
server.listen(8005);
