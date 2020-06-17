FROM node:14.0.0

LABEL MAINTAINER Mizukichi0210(https://github.com/Mizukichi0210)

WORKDIR /practice-reactjs

COPY package.json .

RUN apt-get upgrade && \
  apt-get update && \
  npm install
