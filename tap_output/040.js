function plan (n) {
    console.log('1..' + n);
}

var seq = 0;
function equal (x, y, msg) {
    console.log(
        (x == y ? 'ok' : 'not ok')
        + ' ' + ++seq
        + (msg ? ' - ' + msg : '')
    );
}

plan(3);
equal(1 + 1, 2);
equal('abcdefg'.toUpperCase(), 'ABCDEFG');
equal([1,2,3].map(function (x) { return x * 10 }), [10,20,30]);

// ./run2.sh
