#!/usr/bin/env sh
npm i
npm run build
tar -zcvf build.tar.gz ./build