FROM node:12

WORKDIR /usr/src/app

COPY package.json ./

COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 80
EXPOSE 8000
EXPOSE 8888

CMD ["node", "scripts/server.js"]
