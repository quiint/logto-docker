CONTAINER_ALREADY_STARTED="CONTAINER_ALREADY_STARTED_PLACEHOLDER"
if [ ! -e $CONTAINER_ALREADY_STARTED ]; then
    touch $CONTAINER_ALREADY_STARTED
    logto init -p /app --download-url /tmp/logto.tar.gz $ARGS --skip-seed
else
    cd /app
    logto connector add --official -p /app
    npm start
fi
