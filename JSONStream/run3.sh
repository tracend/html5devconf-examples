#!/bin/bash
echo '#' browserify 150.js -o static/bundle.js
browserify 150.js -o static/bundle.js --debug

echo '#' now visit http://localhost:8005
node 110.js
