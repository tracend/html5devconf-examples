#!/bin/bash
echo browserify main.js -o static/bundle.js
browserify 020_files/main.js -o static/bundle.js

node 020_server.js
