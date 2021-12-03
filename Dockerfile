FROM node:14-alpine AS builder
COPY . ./home/bot
WORKDIR ./home/bot

RUN npm install

CMD ["./index.js"]