FROM node:alpine

EXPOSE 3001
ENV ALL_YES 1
ENV NO_INQUIRY 0
ENV TRUST_PROXY_HEADER=1

COPY index.js main.js .
RUN ["node", "build.js"]

ENTRYPOINT ["node", "main.js"]
