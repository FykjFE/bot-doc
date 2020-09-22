#!/usr/bin/env sh

name=bot.zzfzzf.com

cd /www/wwwroot/$name
rm -rf build/*
tar -zxvf build.tar.gz
rm -rf build.tar.gz