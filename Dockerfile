FROM node:16-alpine

EXPOSE 3001
ENV ALL_YES 1
ENV NO_INQUIRY 0
ENV TRUST_PROXY_HEADER=1

RUN apk add --no-cache curl python3 make g++
COPY index.js .
ENTRYPOINT ["node", "index.js"]
