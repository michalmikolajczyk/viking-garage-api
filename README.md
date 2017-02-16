# viking-garage-api
VIKING GARAGE API

### Setup
#### Add config.js file in root dir, example:
```
var config = {
  session: {
    secret: 'secret-session-key',
  },
}
```
#### Run app
```
git clone git@github.com:michalmikolajczyk/viking-garage-api.git
cd viking-garage-api && npm i
# for production environment
npm start
# for development (hot reloading)
npm run dev
# for running tests (mocha)
npm test
```

### Setup Database (PostgreSQL)
#### PostgreSQL installation
```
brew update
brew install postgres
postgres -D /usr/local/var/postgres
```
#### Create user & database
```
createuser -P viking # provide password
createdb vg # create database for prod, test and dev
psql vg # login to db and grant privieges
grant all privileges on database vg to viking;
```
#### Add config.js file in root dir, example:
```
var config = {
  db: {
    database: {
      test: 'test', // name of test db
      prod: 'prod',
      dev: 'dev',
    },
    username: 'viking',
    password: 'password',
    host: 'localhost',
    port: 5432,
  },
  session: {
    secret: 'secret-session-key',
  },
}

module.exports = config
```
