FROM nginx-alpine
RUN mkdir /app
COPY ./build /app
COPY nginx.conf /etc/nginx/nginx.conf