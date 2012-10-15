#!/bin/bash

echo '#' browserify 060_transform.js -o static/bundle.js
browserify 060_transform.js -o static/bundle.js

echo http://localhost:8005
node 050_server.js
