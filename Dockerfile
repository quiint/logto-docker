FROM node:16-alpine as app

COPY index.js .
RUN apk add --no-cache curl python3 make g++
RUN node index.js
RUN apk del curl python3 make g++

WORKDIR /logto
EXPOSE 3001

# ENV ALL_YES 1
# ENV NO_INQUIRY 0
ENV TRUST_PROXY_HEADER=1
ENTRYPOINT ["npm", "start"]
