var Sequelize = require('sequelize')
var db = require('./config').db

var sequelize = new Sequelize(db.database, db.username, db.password, {
  host: db.host || 'localhost',
  port: db.port || 5432,
  dialect: 'postgres',
})

module.exports = sequelize
