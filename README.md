# viking-garage-api
VIKING GARAGE API

### Setup
#### Add src/config.ts file with configuration
Check out src/config.ts.example with sample data
#### Run app
```
git clone git@github.com:michalmikolajczyk/viking-garage-api.git
cd viking-garage-api && npm i
npm test    # for running tests (mocha)
npm run dev # for development (hot reloading)
npm start   # for production environment
```

### Docs
- `npm start`
- swagger-ui: [localhost:4000/docs?url=http://localhost:4000/swagger.json](http://localhost:4000/docs?url=http://localhost:4000/swagger.json)
- openAPI spec: [localhost:4000/swagger.json](http://localhost:4000/swagger.json)

### Database
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
psql test_db          # login to db and grant privieges
GRANT ALL PRIVILEGES ON DATABASE test_db TO viking;
```

### Dev env
- Sublime
- [DocBlockr](https://github.com/spadgos/sublime-jsdocs) plugin for Sublime jsDoc
- [TSLint](https://github.com/lavrton/SublimeLinter-contrib-tslint) TypeScript linter for Sublime
