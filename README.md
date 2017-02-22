# viking-garage-api
VIKING GARAGE API

### Setup
#### Add src/config.ts file (database config below)
```
export default {
  database: {
    username: 'viking',
    password: 'secret',
    host: 'localhost',
    port: 5432,
    name: {
      test: 'test_db',
      prod: 'prod_db',
      dev: 'dev_db',
    }
  },
  session: 'secret-session-key',
  origin: ['http://localhost:4000', 'http://vikinggarage.com'],
  host: 'localhost',
  port: 4000,
}
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
