var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    fs.createReadStream('citylots.json').pipe(res);
});
server.listen(8005);
