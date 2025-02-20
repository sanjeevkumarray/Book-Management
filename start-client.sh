#!/bin/bash

# Instal node modules
(cd clinet && npm install)

# Start the React app located in the /client folder
(cd client && npm start)