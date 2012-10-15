var shoe = require('shoe');
var stream = shoe('/sock');

window.addEventListener('keydown', function (ev) {
    stream.write(String.fromCharCode(ev.keyCode));
});
