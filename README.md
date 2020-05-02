# React.js練習用

## 起動方法

```bash
# ビルド方法
$ docker build ./docker/. -t practice-reactjs

# コンテナ起動方法
$ docker run --rm -p 8000:8000 -v $(pwd):/practice-reactjs -it practice-reactjs /bin/ash
```

## デプロイ方法

```bash
# デプロイ
$ npm run deploy

# エラーが出た場合の対処法
$ rm -rf node_modules/*
$ npm install
$ npm run deploy
```
