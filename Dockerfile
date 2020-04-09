FROM node:12.16.1-alpine AS development

WORKDIR /opt/app/nestjs-todo

COPY package.json ./

RUN yarn install --only=development

COPY . /opt/app/nestjs-todo

RUN yarn build

FROM node:12.16.1-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app/nestjs-todo

COPY package*.json ./

RUN npm install --only=production

COPY . /opt/app/nestjs-todo

COPY --from=development /opt/app/nestjs-todo/dist ./dist

CMD ["node", "dist/main"]