FROM node:lts-alpine

RUN npm i -g @logto/cli

COPY start.sh /start.sh

ENTRYPOINT ["sh", "/start.sh"]