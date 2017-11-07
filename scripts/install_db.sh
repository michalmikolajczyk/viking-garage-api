#!/bin/bash

brew update
brew install postgres
brew install postgis

postgres -D /usr/local/var/postgres >logfile 2>&1 &

npm -i -g sequelize
