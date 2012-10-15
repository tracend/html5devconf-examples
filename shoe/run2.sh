#!/bin/bash

echo '#' browserify 090_browser.js -o static/bundle.js
browserify 090_browser.js -o static/bundle.js

echo http://localhost:8005
node 070_server.js
