#!/bin/sh
set -eu

IMAGE_NAME='practice-reactjs:latest'

# 既存のlatestイメージが存在する場合、latestイメージを削除する
if [ "$(docker image ls -q ${IMAGE_NAME})" ]; then
  docker rmi practice-reactjs:latest
fi

cp -p package.json ./docker/
docker build ./docker/. -t practice-reactjs
