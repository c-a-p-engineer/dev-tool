FROM node:17-buster

ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

RUN apt-get update
RUN apt-get install vim
RUN npm i -g prettier eslint-config-prettier stylelint stylelint-config-standard stylelint-config-prettier

WORKDIR /src/app
