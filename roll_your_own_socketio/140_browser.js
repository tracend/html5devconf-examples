var shoe = require('shoe');

var stream = shoe('/sock');

stream.on('data', function (buf) {
    document.body.textContent += buf;
});
