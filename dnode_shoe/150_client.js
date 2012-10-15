var shoe = require('shoe');
var dnode = require('dnode');
var stream = shoe('/dnode');

var d = dnode();
d.on('remote', function (remote) {
    remote.transform('beep', function (s) {
        document.body.textContent = 'beep => ' + s;
    });
});
d.pipe(stream).pipe(d);

// ./run1.sh
