FROM node:16-alpine as app

COPY index.js .
RUN node index.js

WORKDIR /logto
EXPOSE 3001

ENV ALL_YES 1
ENV NO_INQUIRY 0
ENTRYPOINT ["npm", "start"]