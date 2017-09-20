import * as dotenv from 'dotenv';
dotenv.config();
import * as walkSync from 'walk-sync';
import sequelize from './config';
import { createRelations } from './relations';

const db = {};
const path = `${__dirname}/models`;
const paths = walkSync(`${path}`);

const dbEnv = sequelize[process.env.NODE_ENV]
paths.forEach((file) => {
  const model = dbEnv.import(`${path}/${file}`);
  db[model.name] = model;
});

createRelations(db);

db['sequelize'] = sequelize[process.env.NODE_ENV];

export default db;
