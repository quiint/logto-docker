FROM node:alpine

EXPOSE 3001
COPY main.js .
RUN apk add --no-cache curl
RUN ["node", "build.js"]

ENTRYPOINT ["node", "main.js"]
