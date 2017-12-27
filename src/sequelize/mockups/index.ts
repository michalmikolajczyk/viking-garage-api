import * as walkSync from 'walk-sync';
import * as fs from 'fs';
import create from './offers';
import db from '../';



function mockup() {
  const path = `${__dirname}`;
  const paths = walkSync(`${path}`, { globs: ['*.json'] });
  const promises = [];

  paths.forEach((file) => {
    const json = fs.readFileSync(`${path}/${file}`, 'utf-8');
    try {
      const data = JSON.parse(json);
      const model = file.replace('.json', '');
      promises.push(db[model].bulkCreate(data).catch(err => console.log('Bulk create', err)));
    } catch (err) {
      console.log(`Error with ${file}`, err);
    }
  });

  return Promise.all(promises);
}

function createAll() {
  if (process.env.NODE_ENV !== 'test') return false;
  return db['sequelize'].sync({ force: true })
    .then(mockup)
    .then(create);
}

createAll();
