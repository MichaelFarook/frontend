FROM nginx:stable
MAINTAINER MichaelFarook

COPY ./container /usr/share/nginx/html
