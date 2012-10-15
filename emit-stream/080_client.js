var request = require('request');
var stream = request('http://localhost:8005/stream');
stream.pipe(process.stdout);

// ./run3.sh
