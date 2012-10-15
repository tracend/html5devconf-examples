var http = require('http');

var server = http.createServer(require('ecstatic')(__dirname + '/static'));
server.listen(8005);

var shoe = require('shoe');

var sock = shoe(function (stream) {
    var i = 0;
    setInterval(function () {
        stream.write(String(i++ % 2));
    }, 100);
});

sock.install(server, '/sock');
