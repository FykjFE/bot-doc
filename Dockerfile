FROM node:12-alpine
COPY ./ /app
WORKDIR /app
RUN npm i && npm run build

FROM nginx
RUN mkdir /app
COPY --from=0 /app/build /app
COPY nginx.conf /etc/nginx/nginx.conf