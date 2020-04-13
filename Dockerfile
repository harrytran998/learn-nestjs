FROM node:12.16.1-alpine AS development

WORKDIR /opt/app/nestjs-todo-backend

COPY . /opt/app/nestjs-todo-backend

RUN yarn install

CMD yarn start:dev

# FROM node:12.16.1-alpine as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /opt/app/nestjs-todo

# COPY package*.json ./

# RUN npm install --only=production

# COPY . /opt/app/nestjs-todo

# COPY --from=development /opt/app/nestjs-todo/dist ./dist

# CMD ["node", "dist/main"]