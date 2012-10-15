var shoe = require('shoe');
var dnode = require('dnode');
var stream = shoe('/dnode');

var d = dnode();
d.pipe(stream).pipe(d);
