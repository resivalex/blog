FROM node:8.1.1
RUN npm install -D ts-node
RUN npm install -S @angular/platform-server @angular/animations

RUN mkdir /app
WORKDIR /app
ADD . /app

RUN npm install
