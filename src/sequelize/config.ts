import Sequelize from 'sequelize';
import config from '../config';

const db = process.env.DATABASE_URL || config.database;
let sequelize;

if (typeof db === 'string') {
  sequelize = new Sequelize(db, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: true,
    },
  });
} else {
  sequelize = new Sequelize(db.name, db.username, db.password, {
    host: db.host || 'localhost',
    port: db.port || 5432,
    dialect: 'postgres',
    logging: false,
  });
}

export default sequelize;
