# viking-garage-api
VIKING GARAGE API

### Setup
```
git clone git@github.com:michalmikolajczyk/viking-garage-api.git
cd viking-garage-api && npm i
# for production environment
npm start
# for development (hot reloading)
npm run dev
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
createdb vg
psql vg
grant all privileges on database vg to viking;
```
#### Add config.js file in root dir, example:
```
var config = {
  db: {
    database: 'vg',
    username: 'viking',
    password: 'password',
    host: 'localhost',
    port: 5432,
  },
}
```
