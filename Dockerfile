FROM node:alpine

RUN apk add --no-cache curl
USER node
COPY --chown=node:node main.js ~/
WORKDIR ~
EXPOSE 3001

ENTRYPOINT ["node", "main.js"]
