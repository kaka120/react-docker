FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# inside the workdir /app/build all the build will be copied

#   importing nginx for the production server
FROM nginx
#   copying the build content from /app/build to nginx in the /usr/share/nginx/html
COPY --from=builder /app/build /usr/share/nginx/html

