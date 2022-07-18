# logto-docker

logto docker image

```
docker run -p 3001:3001 \
   -e DB_URL_DEFAULT=postgres://username:passwd@postgres_url:5432 \
   -e ENDPOINT=protocol://localhost:$PORT \
   gonorth/logto
```