var shoe = require('shoe');
var dnode = require('dnode');
var stream = shoe('/dnode');

var d = dnode();
d.on('remote', function (remote) {
    // ..
});
d.pipe(stream).pipe(d);
