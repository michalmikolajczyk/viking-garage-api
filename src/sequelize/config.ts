import Sequelize from 'sequelize'
import config from '../config'

let db = config.database

var db_name = 'vg'

var sequelize = new Sequelize(db_name, db.username, db.password, {
  host: db.host || 'localhost',
  port: db.port || 5432,
  dialect: 'postgres',
  // disable logging - for test it's too verbose
  logging: (process.env.NODE_ENV !== 'test'),
})

export default sequelize
