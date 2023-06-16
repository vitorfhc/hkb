FROM node:20-alpine

WORKDIR /app/website

COPY website/package.json /app/website/package.json

RUN npm install

COPY website/ /app/website/

EXPOSE 3000

CMD ["npm", "start"]