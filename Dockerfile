FROM node:18-bullseye-slim

RUN apk update && \
    apk upgrade && \
    apk add --no-chache vim yarn bash

COPY ./ /react-todo-app/
WORKDIR /react-todo-app/