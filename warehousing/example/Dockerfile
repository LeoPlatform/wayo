FROM node:8-alpine

RUN apk add --update \
    jq \
    python \
    py-pip \
    bash \
    postgresql-dev \
    alpine-sdk \
    bash-completion \
    screen \
  && mkdir -p /root/app \
  && pip install --upgrade pip \
  && pip install awscli \
  && rm -rf /var/cache/apk/* 

RUN npm install leo-cli@2.3.3 -g

# RUN sed '/127.0.0.1/d' /etc/hosts | cat > /etc/hosts

WORKDIR /root/app

CMD ["bash"]