from node:alpine

MAINTAINER Julius Breckel <julius.breckel@gmail.com>

WORKDIR /opt/app

RUN mkdir -p /opt

# Copy the code
ADD node_modules /opt/app/node_modules
ADD build /opt/app/run

CMD ["node", "run/index"]
