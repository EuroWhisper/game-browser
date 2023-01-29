FROM node:lts

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

ENV HOST=0.0.0.0 PORT=3000
EXPOSE 3000

CMD [ "npm", "start" ]