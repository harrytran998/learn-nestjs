FROM node:12.16.1-alpine

WORKDIR /opt/app/nestjs-todo

COPY . /opt/app/nestjs-todo

# In Production Env
RUN yarn install --production=true

CMD yarn start:dev