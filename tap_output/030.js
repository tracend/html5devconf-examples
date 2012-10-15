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
