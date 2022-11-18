FROM node:lts-alpine

COPY start.sh /start.sh

WORKDIR /app

ENTRYPOINT ["/start.sh"]