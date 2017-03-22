import * as walkSync from 'walk-sync';
import * as appRoot from 'app-root-path';
import * as fs from 'fs';
import db from '../';

export default function mockup() {
  const path = `${appRoot.path}/src/sequelize/mockups`
  const paths = walkSync(`${path}`, { globs: ['*.json'] });
  const promises = [];

  paths.forEach((file) => {
    const json = fs.readFileSync(`${path}/${file}`, 'utf-8');
    try {
      const data = JSON.parse(json);
      const model = file.replace('.json', '');
      promises.push(db[model].bulkCreate(data).catch(err => console.log('Bulk create', err)));
    } catch(err) {
      console.log(`Error with ${file}`, err);
    }
  })

  return Promise.all(promises);
}
