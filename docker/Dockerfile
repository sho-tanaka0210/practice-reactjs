FROM node:14.0.0

LABEL MAINTAINER Mizukichi0210(https://github.com/Mizukichi0210)

ENV USER_NAME='mizukichi0210' \
  MAIL_ADDRESS='canaryyellow.nl@gmail.com'

RUN apt-get update && \
  apt-get install -y git && \
  git config --global user.name ${USER_NAME} && \
  git config --global user.email ${MAIL_ADDRESS}

WORKDIR /practice-reactjs
