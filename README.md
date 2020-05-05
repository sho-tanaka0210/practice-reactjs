# React.js練習用

![deploy](https://github.com/Mizukichi0210/practice-reactjs/workflows/deploy/badge.svg?branch=master&event=push)

トップにREADME.mdが存在する場合、GitHub pagesでの公開ができなかったため、  
devleoperフォルダへ移動

## 起動方法

```bash
# ビルド方法
$ docker build ./docker/. -t practice-reactjs

# コンテナ起動方法
$ docker run --rm -v /Users/kichimiz/.ssh:/root/.ssh:ro -p 8000:8000 -v $(pwd):/practice-reactjs -it practice-reactjs /bin/bash

# サーバ起動方法
$ npm start
```

## デプロイ方法

```bash
# sshキーの設定
$ eval `ssh-agent`
$ ssh-add /root/.ssh/id_rsa

# デプロイ
$ npm run deploy

# エラーが出た場合の対処法
$ rm -rf node_modules/*
$ npm install
$ npm audit fix
$ npm run deploy
```
