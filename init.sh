#!/bin/bash
chmod a+x ./inlets
./inlets server --port=443 --token="$TOKEN"
node server.js