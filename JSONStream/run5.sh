#!/bin/bash
echo '#' browserify 160.js -o static/bundle.js
browserify 160.js -o static/bundle.js --debug

echo '#' now visit http://localhost:8005
node 170.js
