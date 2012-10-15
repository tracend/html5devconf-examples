#!/bin/bash

echo '#' browserify 190_browser.js -o static/bundle.js
browserify 190_browser.js -o static/bundle.js

echo http://localhost:8005
node 130_server.js
