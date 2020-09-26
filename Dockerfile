FROM nginx:1.19-alpine
RUN mkdir /app
COPY ./build /app
COPY nginx.conf /etc/nginx/nginx.conf