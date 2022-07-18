FROM node:16-alpine as app

COPY index.js .
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories
RUN apk add --nocache curl python make g++
RUN node index.js

WORKDIR /logto
EXPOSE 3001

ENV ALL_YES 1
ENV NO_INQUIRY 0
ENTRYPOINT ["npm", "start"]