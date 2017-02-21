# viking-garage-api
VIKING GARAGE API

### Setup
#### Add config.ts file in root dir, example:
```
const session = {
  secret: 'secret-session-key',
}

export { session }
```
#### Run app
```
git clone git@github.com:michalmikolajczyk/viking-garage-api.git
cd viking-garage-api && npm i
npm test    # for running tests (mocha)
npm run dev # for development (hot reloading)
npm start   # for production environment
```

### Setup Database with Postgres
#### Postgres installation
```
brew update
brew install postgres
postgres -D /usr/local/var/postgres
```
#### Create user & database
```
createuser -P viking  # provide username & password
createdb test_db      # create database for prod, test and dev
psql vg               # login to db and grant privieges
grant all privileges on database vg to viking;
```
#### Add config.ts file in root dir, example:
```
const db = {
  database: {
    test: 'test_db', // name of test db
    prod: 'prod_db',
    dev: 'dev_db',
  },
  username: 'viking',
  password: 'secret',
  host: 'localhost',
  port: 5432,
}

const session = {
  secret: 'secret-session-key',
}

export {
  session,
  db
}
```
