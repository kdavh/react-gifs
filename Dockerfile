FROM node:latest
RUN mkdir -p /project
WORKDIR /project

CMD [ "npm", "start" ]
