from node:alpine

MAINTAINER Julius Breckel <julius.breckel@gmail.com>

# only while dev
RUN apk add --update bash && rm -rf /var/cache/apk/*

WORKDIR /opt/app

RUN mkdir -p /opt

# Copy the code
ADD node_modules /opt/app/node_modules
ADD build /opt/app/run

EXPOSE $PORT

CMD ["node", "run/index"]
