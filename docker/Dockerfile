FROM node:14.4.0-alpine3.11

LABEL MAINTAINER Mizukichi0210(https://github.com/Mizukichi0210)

WORKDIR /practice-reactjs

COPY package.json .

RUN apk upgrade && \
  apk update && \
  npm install && \
  npm audit fix
