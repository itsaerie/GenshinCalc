#!usr/bin/env bash

# Silent mode for npm
npm i -${MODE}
# Webpack
npm i -g webpack -${MODE}
npm i -S webpack -${MODE}
npm i -D webpack-cli -${MODE}
# Bootstrap
npm i react-bootstrap bootstrap -${MODE}