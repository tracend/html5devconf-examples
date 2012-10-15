#!/bin/bash

echo '#' browserify 230_browser.js -o static/bundle.js
browserify 230_browser.js -o static/bundle.js

echo http://localhost:8005
echo http://localhost:8006

node 140.js 8005 &
node 140.js 8006 8005
