import * as walkSync from 'walk-sync';
import * as appRoot from 'app-root-path';
import sequelize from './config';
import mockup from './mockups';
import create from './mockups/offers';

const db = {};
const path = `${appRoot.path}/src/sequelize/models`;
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


