FROM node:latest

WORKDIR /app

COPY . .

RUN npm install --force
RUN npm run build

EXPOSE 5173

CMD [ "npm", "start" ]