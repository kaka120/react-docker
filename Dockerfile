# Importing the node alpine image from dockerhub
FROM node:alpine as builder
# Specifying the working directory in the the workspace
WORKDIR '/app'
# Copying the package json from current directory to working dir
COPY package.json .
# Installing the npm for the various depandancies
RUN npm install
# Copying the source code in the docker container
COPY . .
# Runing the command for the build process
RUN npm run build

# Inside the workdir /app/build all the build will be copied

# Importing nginx for the production server

FROM nginx
# Copying the build content from /app/build to nginx in the /usr/share/nginx/html

COPY --from=builder /app/build /usr/share/nginx/html

