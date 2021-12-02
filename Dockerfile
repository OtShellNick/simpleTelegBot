FROM node:14-alpine AS builder
#RUN apt-get update -qq && apt-get install -y build-essential
RUN apk add --update \
    python3 \
    python3-dev \
    py3-pip \
  && rm -rf /var/cache/apk/*

WORKDIR /src

COPY package.json ./
#COPY package-lock.json ./

RUN npm install --frozen-lockfile
COPY . .
RUN npm start

ENTRYPOINT ["tail"]
CMD ["-f","/dev/null"]
