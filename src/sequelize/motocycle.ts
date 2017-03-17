import * as walkSync from 'walk-sync';
import * as appRoot from 'app-root-path';
import sequelize from './config';
import fillDb from './mockups/motorcycle';

const db = {};
const path = `${appRoot.path}/src/sequelize/models/motorcycle`;
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

sequelize.sync({ force: true }).then(fillDb);

db['sequelize'] = sequelize;

export default db;
