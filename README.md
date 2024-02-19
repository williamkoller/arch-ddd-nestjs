# Arch DDD Nestjs

## Required `docker` and `docker-compose`

<img src="/imgs/41ni9tGguyL.jpg" alt="book" title="book" height="104" width="76" align="right"/>

#### How to run the application?

- `cp -r .env.example .env`
  
```bash
MONGODB_URI=
MONGODB_PORT=
PORT=

THROTTLE_TTL=
THROTTLE_LIMIT=
```

- view script in `package.json`

- run `yarn up` that exec command `docker-compose down && docker-compose up --build`