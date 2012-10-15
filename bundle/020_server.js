var http = require('http');
var ecstatic = require('ecstatic')(__dirname + '/static');
http.createServer(ecstatic).listen(8005);
console.log('http://localhost:8005');
