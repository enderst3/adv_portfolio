#!/bin/sh

# see http://docs.gunicorn.org/en/stable/setting.html

/usr/local/bin/gunicorn \
    flaskapp:app \
    --bind :8000 \
    --workers 2 \
    --timeout 3600 \
    --access-logfile log/gunicorn-access.log \
    --error-logfile log/gunicorn-error.log \
    --log-level info \
    --timeout 3600 \
    --reload
