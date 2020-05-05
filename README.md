# React.js練習用

![deploy](https://github.com/Mizukichi0210/practice-reactjs/workflows/deploy/badge.svg?branch=master&event=push)
[![codecov](https://codecov.io/gh/Mizukichi0210/practice-reactjs/branch/master/graph/badge.svg)](https://codecov.io/gh/Mizukichi0210/practice-reactjs)

masterブランチへpush後にGitHub pagesにデプロイされる(将来的に予定)

## 起動方法

```bash
# ビルド方法
# /practice-reactjs 直下で行う
$ docker/build_image.sh

# コンテナ起動方法
$ docker run --rm -v /Users/kichimiz/.ssh:/root/.ssh:ro -p 8000:8000 -v $(pwd):/practice-reactjs -it practice-reactjs /bin/bash

# サーバ起動方法
$ npm start
```

## デプロイ方法

```bash
# コンテナの起動
$ docker run --rm -v /Users/kichimiz/.ssh:/root/.ssh:ro -p 8000:8000 -v $(pwd):/practice-reactjs -it practice-reactjs /bin/bash

# sshキーの設定
$ eval `ssh-agent`
$ ssh-add /root/.ssh/id_rsa

# デプロイ
$ npm run deploy

# デプロイ時にエラーが出た場合の対処法
$ rm -rf node_modules/*
$ npm install
$ npm audit fix
$ npm run deploy
```
