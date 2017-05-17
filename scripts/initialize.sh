#!/bin/bash

# brew update
# brew install postgres
# brew install postgis

postgres -D /usr/local/var/postgres >logfile 2>&1 &

createuser -w viking  # provide username & password
createdb test_db      # create database for prod, test and dev
psql test_db -c "GRANT ALL PRIVILEGES ON DATABASE test_db TO viking"
psql test_db -c "CREATE EXTENSION postgis"

(cd src && cp config.ts.example config.ts)

npm i
npm test
npm run dev

