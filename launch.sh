#!/bin/sh

cp config/"${ENVIRONMENT}".json /usr/share/nginx/html/config.json

nginx -g "daemon off;"