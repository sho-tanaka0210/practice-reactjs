#!/bin/sh
set -eu

cp -p package.json ./docker/
docker build ./docker/. -t practice-reactjs
