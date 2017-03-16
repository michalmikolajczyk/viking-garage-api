import * as walkSync from 'walk-sync';
import * as appRoot from 'app-root-path';
import * as fs from 'fs';
import debug from 'debug';
import db from '../../motocycle';
const log = debug('api:sequelize');

export default function fillDb() {
  const path = `${appRoot.path}/src/sequelize/mockups/motorcycle`
  const paths = walkSync(`${path}`, { ignore: ['index.ts'] });
  const promises = [];

  paths.forEach((file) => {
    const json = fs.readFileSync(`${path}/${file}`, 'utf-8');
    const data = JSON.parse(json);
    const model = file.replace('.json', '');
    promises.push(db[model].bulkCreate(data));
  })

  Promise.all(promises).then(() => {
    const motorcycle = db['motorcycle']
    motorcycle.findById(1)
      .then((moto) => {
        Promise.all([
          moto.setMake('KTM'),
          moto.setModel('SX 125'),
          moto.setModelspec(1),
          moto.setMotorspec(1),
          moto.setProtection(1),
        ]).then(() => log(moto.dataValues));
      })

      motorcycle.findById(2)
        .then((moto) => {
          Promise.all([
            moto.setMake('Husaberg'),
            moto.setModel('FE 390'),
            moto.setModelspec(1),
            moto.setMotorspec(1),
            moto.setProtection(1),
          ]).then(() => log(moto.dataValues));
        });

      motorcycle.findById(3)
        .then((moto) => {
          Promise.all([
            moto.setMake('KTM'),
            moto.setModel('Freeride 250R'),
            moto.setModelspec(1),
            moto.setMotorspec(1),
            moto.setProtection(1),
          ]).then(() => log(moto.dataValues));
        });
  })
}
