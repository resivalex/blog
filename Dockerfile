FROM node
RUN npm install -g @angular/cli

RUN mkdir /app
WORKDIR /app
ADD . /app

RUN npm install