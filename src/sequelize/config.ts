import Sequelize from 'sequelize';
import config from '../config';

const db = config.database;
const sequelize = new Sequelize(db.name, db.username, db.password, {
  host: db.host || 'localhost',
  port: db.port || 5432,
  dialect: 'postgres',
  logging: false,
});

export default sequelize;
