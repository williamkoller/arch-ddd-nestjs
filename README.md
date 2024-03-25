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

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fwilliamkoller%2Farch-ddd-nestjs.svg?type=large&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2Fwilliamkoller%2Farch-ddd-nestjs?ref=badge_large&issueType=license)