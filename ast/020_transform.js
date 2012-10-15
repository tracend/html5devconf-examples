var src = '(' + function () {
    var x = 2 + 3 * 6;
    var y = Math.pow(x, 2);
    console.log(x + y);
} + ')()';

var falafel = require('falafel');
var out = falafel(src, function (node) {
    // ...
});
