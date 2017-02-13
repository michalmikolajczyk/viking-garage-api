var Sequelize = require('sequelize')
var db = require('./config').db

var db_name = process.env.NODE_ENV
  ? db.database[process.env.NODE_ENV]
  : db.database['test']

var sequelize = new Sequelize(db_name, db.username, db.password, {
  host: db.host || 'localhost',
  port: db.port || 5432,
  dialect: 'postgres',
  // disable logging - for test it's too verbose
  logging: process.env.NODE_ENV !== 'test',
})

module.exports = sequelize
