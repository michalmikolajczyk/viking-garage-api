#!/bin/bash

# dump bazy danych
rm -rf dump
mkdir dump
cd dump
heroku pg:backups:capture -a viking-garage-api-production
heroku pg:backups:download -a viking-garage-api-production
