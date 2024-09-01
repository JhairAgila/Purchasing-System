# FROM node:lts-bullseye as build
# WORKDIR /app
# COPY . .
# # RUN npm install
# RUN npm install --legacy-peer-deps
# COPY . .
# RUN npm run build


# FROM nginx:1.19.0-alpine AS prod-stage
# ADD ./config/nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /app/build /var/www/app/
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

FROM node:latest
WORKDIR /app
# COPY package.json . 
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn run build
EXPOSE 3000
CMD [ "yarn", "start" ]