#!/bin/bash

echo '#' browserify 130_browser.js -o static/bundle.js
browserify 130_browser.js -o static/bundle.js

echo http://localhost:8005
node 070.js
