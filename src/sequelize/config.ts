import Sequelize from 'sequelize';
import config from '../config';

let db = process.env.DATABASE_URL || config.database;
if (typeof db === 'string') db = db + '&sslmode=require'
let sequelize;

if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(db);
} else {
    sequelize = new Sequelize(db.name, db.username, db.password, {
      host: db.host || 'localhost',
      port: db.port || 5432,
      dialect: 'postgres',
      logging: false,
    });
}

export default sequelize;
