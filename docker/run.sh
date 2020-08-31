#!/bin/sh
set -eu

FOLDER_NAME='practice-reactjs'

# node_modulesの.gitkeepを除いて全削除
# cd $FOLDER_NAME/node_modules
cd node_modules
ls | xargs rm -rf
rm -rf ./.bin/

cd ../

# 1. イメージ内部の node_modules のコピー & package-lock.json のコピー
# 2. コンテナの起動
docker run --rm -v $(pwd):/practice-reactjs -it practice-reactjs /bin/bash -c "cp -rn /root/node_modules/ /practice-reactjs && cp -u /root/package-lock.json /practice-reactjs"
docker run --rm -p 8000:8000 -v $(pwd):/practice-reactjs -it practice-reactjs /bin/bash
