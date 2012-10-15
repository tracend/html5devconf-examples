#!/bin/bash
echo '#' browserify main.js -o static/bundle.js --watch -v
browserify 030_files/main.js -o static/bundle.js --watch -v
