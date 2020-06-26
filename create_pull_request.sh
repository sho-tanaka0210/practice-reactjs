#!/bin/sh
set -eu

GITHUB_API_TOKEN=$1
USER_NAME=$2
EMAIL=$3
ORIGIN_URL=$4
REPO_NAME=$5

DATE=`date +%Y%m%d`
BRANCH_NAME=npm_update_$DATE

set_git_setting() {
  git config --global user.name $USER_NAME
  git config --global user.email $EMAIL
  git remote set-url origin $ORIGIN_URL
  git checkout -b $BRANCH_NAME
}

create_pull_request() {
  is_add=false
  if [ "$(git diff --exit-code --name-only $1)" ]; then
    is_add=true
    git add $1
  fi

  if [ "$(git diff --exit-code --name-only $2)" ]; then
    is_add=true
    git add $2
  fi
  
  # 何も `git add` されていないければ終了
  $is_add || return
  
  set_git_setting
  git commit -m "$DATE - Run npm update"
  git push origin $BRANCH_NAME

  # PR作成処理
  curl -X POST "https://api.github.com/repos/$USER_NAME/$REPO_NAME/pulls" \
      -H "Authorization: token $GITHUB_API_TOKEN" \
      -H 'Content-Type:application/json;charset=utf-8' \
      -d "{"title": "npm update", "head": "$USER_NAME:$BRANCH_NAME", \
          "base": "master", "body": "npm updateを行った結果のPR。 localhost上で動作確認をし、問題がなければマージすること"}"
}

create_pull_request 'package.json' 'package-lock.json'
