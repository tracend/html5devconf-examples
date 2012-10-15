var src = '(' + function () {
    var x = 2 + 3 * 6;
    var y = Math.pow(x, 2);
    console.log(x + y);
} + ')()';

var falafel = require('falafel');
var out = falafel(src, function (node) {
    if (node.type === 'CallExpression') {
        node.update('fff(' + node.source() + ')');
    }
});

var original = false;
setInterval(function () {
    document.querySelector('pre').textContent = original ? src : out;
    original = !original;
}, 1000);

// ./run2.sh
