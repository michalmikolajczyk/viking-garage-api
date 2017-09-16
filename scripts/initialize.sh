#!/bin/bash

# brew update
# brew install postgres
# brew install postgis

# postgres -D /usr/local/var/postgres >logfile 2>&1 &

# createuser -w viking  # provide username & password
# createdb test_db      # create database for prod, test and dev
# psql test_db -c "GRANT ALL PRIVILEGES ON DATABASE test_db TO viking"
# psql test_db -c "CREATE EXTENSION postgis"

(cp .env.example .env)

dropdb -U postgres viking_garage

createdb -E UTF8 -U postgres viking_garage

pg_restore -U postgres --dbname viking_garage --verbose dump/latest.backup

npm i
npm test
npm run dev
