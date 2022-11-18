FROM node:lts-alpine

RUN wget -O /tmp/logto.tar.gz https://github.com/logto-io/logto/releases/download/$(wget -qO- -t1 -T2 "https://api.github.com/repos/logto-io/logto/releases/latest" | grep "tag_name" | head -n 1 | awk -F ":" '{print $2}' | sed 's/\"//g;s/,//g;s/ //g')/logto.tar.gz
RUN npm i -g @logto/cli
ENV TRUST_PROXY_HEADER=1

COPY start.sh /start.sh

ENTRYPOINT ["sh", "/start.sh"]