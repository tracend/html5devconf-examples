#!/bin/bash

echo '#' browserify 060_browser.js -o static/bundle.js
browserify 060_browser.js -o static/bundle.js

echo http://localhost:8005
node 030_server.js
