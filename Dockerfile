FROM node:8-alpine

RUN apk add --update \
    jq \
    python \
    py-pip \
    python2-dev \
    bash \
    postgresql-dev \
    alpine-sdk \
    bash-completion \
    screen \
  && mkdir -p /root/app \
  && pip install --upgrade pip \
  && pip install awscli \
  && pip install aws-sam-cli \
  && rm -rf /var/cache/apk/* 

RUN npm install leo-cli@2.3.3 -g

# RUN sed '/127.0.0.1/d' /etc/hosts | cat > /etc/hosts

ENV AWS_REGION us-west-2

WORKDIR /root/app

CMD ["bash"]