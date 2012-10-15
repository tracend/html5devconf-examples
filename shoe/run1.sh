#!/bin/bash

echo '#' browserify 050_browser.js -o static/bundle.js
browserify 050_browser.js -o static/bundle.js

echo http://localhost:8005
node 060_server.js
