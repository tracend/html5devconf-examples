#!/bin/bash

echo '#' browserify 070.js -o static/bundle.js
browserify 070.js -o static/bundle.js

echo http://localhost:8005
node 130_server.js
