FROM nginx:1.15
LABEL maintainer="info@redpencil.io"

RUN rm /etc/nginx/conf.d/default.conf \
    && ln -s /usr/share/nginx/html /app

COPY nginx.conf /etc/nginx/conf.d/app.conf
COPY index.html /app
COPY img /app/img
