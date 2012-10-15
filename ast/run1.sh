#!/bin/bash

echo '#' browserify 040_transform.js -o static/bundle.js
browserify 040_transform.js -o static/bundle.js

echo http://localhost:8005
node 050_server.js
