FROM node:6.11.0
RUN npm install -g @angular/cli
RUN npm install -D ts-node
RUN npm install -S @angular/platform-server @angular/animations

RUN mkdir /app
WORKDIR /app
ADD . /app

RUN npm install
