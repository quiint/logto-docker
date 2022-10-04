FROM node:alpine

EXPOSE 3001
COPY main.js .
RUN apk add --no-cache curl

ENTRYPOINT ["node", "main.js"]
