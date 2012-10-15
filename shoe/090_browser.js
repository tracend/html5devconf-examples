var shoe = require('shoe');
var stream = shoe('/sock');

window.addEventListener('keydown', function (ev) {
    stream.write(String.fromCharCode(ev.keyCode));
});

stream.on('data', function (s) {
    var span = document.createElement('span');
    span.textContent = s;
    document.body.appendChild(span);
});

// ./run2.sh
