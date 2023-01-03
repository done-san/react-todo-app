FROM node:18.4.0-alpine

RUN apk update && \
  apk upgrade && \
  apk add --no-cache vim yarn bash

COPY ./ /react-todo-app/
WORKDIR /react-todo-app

RUN yarn install 
