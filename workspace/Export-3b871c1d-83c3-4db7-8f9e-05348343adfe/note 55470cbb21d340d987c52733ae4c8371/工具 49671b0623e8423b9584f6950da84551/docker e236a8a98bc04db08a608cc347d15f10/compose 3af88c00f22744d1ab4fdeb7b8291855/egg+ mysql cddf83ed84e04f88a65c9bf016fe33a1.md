# egg+ mysql

```bash
version: '3.1'
networks:
  backend:
    driver: bridge

services:
  db:
    image: mysql
    # NOTE: use of "mysql_native_password" is not recommended: https://dev.mysql.com/doc/refman/8.0/en/upgrading-from-previous-series.html#upgrade-caching-sha2-password
    # (this is just an example, not intended to be a production configuration)
    command: --default-authentication-plugin=mysql_native_password
    restart: always
    networks:
      - backend
    ports:
      - 3306:3306
    environment:
      MYSQL_ROOT_PASSWORD: 123456

  adminer:
    image: adminer
    restart: always
    networks:
      - backend
    ports:
      - 9002:8080
  egg:
    build:
      context: ../
      dockerfile: ./docker/Dockerfile
      args:
        DOCKER_BUILD_ARGS: --progress=plain 
    image: example/egg:latest
    depends_on:
      - db
    networks:
      - backend
    ports:
      - "9001:9001"
    volumes:
      - ../config:/app/config
```

## dockerfile

```bash
FROM node:18.16.0

WORKDIR /app

ENV NODE_ENV production

COPY ../ /app

RUN npm install 

EXPOSE 9001

CMD ["npm", "run", "start"]
```