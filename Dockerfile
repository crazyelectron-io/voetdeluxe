# Stage 1 - build
FROM node:15.14.0-alpine3.13 AS builder

ENV NODE_ENV=production
# ENV NODE_OPTIONS="--openssl-legacy-provider"

# create destination directory
# RUN mkdir -p /app
WORKDIR /app

# install all node modules
COPY package*.json ./
RUN npm install

# update and install OS dependencies
#RUN apk update && apk --no-cache upgrade
#RUN apk --no-cache add git

# copy the app (note .dockerignore)
COPY . .

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

# Stage 2 - production
FROM node:14.17.0-alpine3.13 AS runner
WORKDIR /app
ADD package.json .
ADD nuxt.config.js .
COPY --from=builder /app/.nuxt ./.nuxt
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/static ./static

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# ENV NODE_OPTIONS="--openssl-legacy-provider"

# set app port
ENV NUXT_PORT=3000
EXPOSE 3000

# start the app
CMD ["npm", "start"]
