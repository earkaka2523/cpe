# docker build -t krismt/alpine-node .
FROM mhart/alpine-node:8.9.0

RUN npm -g install nodemon
WORKDIR /app

EXPOSE 3000

CMD ["npm", "start"]
