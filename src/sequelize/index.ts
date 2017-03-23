import * as walkSync from 'walk-sync';
import sequelize from './config';
import create from './mockups/offers';


const db = {};
const path = `${__dirname}/models`;
const paths = walkSync(`${path}`);

paths.forEach((file) => {
  const model = sequelize.import(`${path}/${file}`);
  db[model.name] = model;
});

Object.keys(db).forEach((model) => {
  if ('associate' in db[model]) {
    db[model].associate(db);
  }
});

db['sequelize'] = sequelize;

export default db;


