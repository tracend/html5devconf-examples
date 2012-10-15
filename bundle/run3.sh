#!/bin/bash
echo browserify main.js -o static/bundle.js --debug
browserify 040_files/main.js -o static/bundle.js --debug

node 020_server.js
