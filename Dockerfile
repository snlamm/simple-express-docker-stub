FROM node:9.4.0-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --pure-lockfile

COPY . .

EXPOSE 3000

CMD [ "yarn", "run", "start" ]