#!/bin/bash

echo '#' browserify 050_client.js -o static/bundle.js
browserify 150_client.js -o static/bundle.js

echo http://localhost:8005
node 050_server.js
