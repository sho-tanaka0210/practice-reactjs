#!/bin/sh
set -eu
echo 'start'

set_git_setting() {
  # git config --global user.name ${USER_NAME}
  # git config --global user.email ${EMAIL}
  # git remote set-url origin ${URL}
  # git checkout -b weekly_npm_update_`date +%Y%m%d`
  echo 'in'
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
  git commit  -m '`date +%Y%m%d` - Run npm update'
  git push origin HEAD

  # PR作成処理
  # curl -H "Authorization: token $token" ¥
  #    "https://api.github.com/repos/USER/REPO/pulls" ¥
  #    -d "{"title": "TITLE", "head": "USER:BRANCH", "base": "master"}"
}

create_pull_request 'package.json' 'package-lock.json'
