#!/bin/bash

# dump bazy danych
rm -rf dump
mkdir dump
cd dump
heroku pg:backups:capture -a viking-garage-api-production
heroku pg:backups:download -a viking-garage-api-production
cd ..

dropdb -U postgres viking_garage
createdb -E UTF8 -U postgres viking_garage
psql viking_garage -c "CREATE EXTENSION postgis"
pg_restore -U postgres --dbname viking_garage --no-owner --verbose dump/latest.backup

cp config/config.json.example config/config.json
sequelize db:migrate --env development
