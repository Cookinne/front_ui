FROM node:12.18.0-alpine3.11 AS builder

LABEL stage="builder"

COPY . /opt/

RUN cd /opt \
    && yarn install \
    && yarn build

FROM nginx:1.19.0-alpine

COPY --from=builder /opt/dist /opt/dist
COPY --from=builder /opt/nginx.conf.template /tmp/

CMD ["/bin/sh", "-c", "envsubst '$BACKEND_URL' < /tmp/nginx.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]

