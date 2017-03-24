# viking-garage-api
VIKING GARAGE API

### Setup
#### Add src/config.ts file with configuration
Check out src/config.ts.example with sample data

#### Database
##### PostgreSQL installation
```
brew update
brew install postgres
brew install postgis
```

##### Database: server up
```
postgres -D /usr/local/var/postgres
```

##### Database: Create user & db
```
createuser -P viking  # provide username & password
createdb test_db      # create database for prod, test and dev
psql test_db -c "GRANT ALL PRIVILEGES ON DATABASE test_db TO viking"
psql test_db -c "CREATE EXTENSION postgis"
```

#### Install dependencies
```
git clone git@github.com:michalmikolajczyk/viking-garage-api.git
cd viking-garage-api && npm i
```

### Commands
```
npm run dev    # for development (hot reloading)
npm test       # for running tests with mocha
npm tdd        # for running tests continuously mocha, TDD style
npm start      # for production environment
```

### Additional info
- swagger-ui: [localhost:4000/docs?url=http://localhost:4000/swagger.json](http://localhost:4000/docs?url=http://localhost:4000/swagger.json)
- openAPI spec: [localhost:4000/swagger.json](http://localhost:4000/swagger.json)

### Dev env
- Sublime
- [DocBlockr](https://github.com/spadgos/sublime-jsdocs) plugin for Sublime jsDoc
- [TSLint](https://github.com/lavrton/SublimeLinter-contrib-tslint) TypeScript linter for Sublime
