FROM node:18-alpine

WORKDIR /usr/src/app

COPY app/package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]