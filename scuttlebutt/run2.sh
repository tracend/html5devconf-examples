#!/bin/bash

echo '#' browserify 210_browser.js -o static/bundle.js
browserify 210_browser.js -o static/bundle.js

echo http://localhost:8005
node 140.js 8005
