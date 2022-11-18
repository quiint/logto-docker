FROM node:lts-alpine

RUN npm i -g @logoto/cli

COPY start.sh /start.sh

ENTRYPOINT ["sh", "/start.sh"]