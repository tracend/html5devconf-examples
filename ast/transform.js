var falafel = require('falafel');
var src = '(' + function () {
    var x = 2 + 3 * 6;
    var y = Math.pow(x, 2);
    console.log(x + y);
} + ')()';

var out = falafel(src, function (node) {
    if (node.type === 'CallExpression') {
        node.update('fff(' + node.source() + ')');
    }
});

var $ = require('jquery-browserify');
$('pre').text(out);
