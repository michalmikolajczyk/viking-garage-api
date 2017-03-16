import {
  Make,
  Model,
  Modelspec,
  Motorcycle,
} from '../../motocycle';
import sequelize from '../../config';
import makes from './makes';
import models from './models';
import modelspecs from './modelspecs';
import motorcycles from './motorcycles';
import debug from 'debug';
const log = debug('api:Sequelize');

export function createMakes(): Promise<any> {
  return Make.sync({ force: true })
    .then(() => Make.bulkCreate(makes))
    .catch(err => log('Database bulkCreate error', err));
}

export function createModels(): Promise<any> {
  return Model.sync({ force: true })
    .then(() => Model.bulkCreate(models))
    .catch(err => log('Database bulkCreate error', err));
}

export function createModelspecs(): Promise<any> {
  return Modelspec.sync({ force: true })
    .then(() => Modelspec.bulkCreate(modelspecs))
    .catch(err => log('Database bulkCreate error', err));
}

export function createMotorcycles(): Promise<any> {
  return Motorcycle.sync({ force: true })
    .then(() => Motorcycle.bulkCreate(motorcycles))
    .catch(err => log('Database bulkCreate error', err));
}

export function createRelations(): Promise<any> {
  Motorcycle.belongsTo(Make);
  Motorcycle.belongsTo(Model);
  Motorcycle.belongsTo(Modelspec);
  return sequelize.sync({ force: true });
}


export function createAll() {
  createRelations().then(() => {
    Promise.all([
      createMakes(),
      createModels(),
      createModelspecs(),
      createMotorcycles(),
    ]).then(() => {
        Motorcycle.findById(1)
          .then((moto) => {
            Promise.all([
              moto.setMake('KTM'),
              moto.setModel('SX 125'),
              moto.setModelspec(1),
            ]).then(() => {
              console.log(moto.dataValues);
            });
          });

        Motorcycle.findById(2)
          .then((moto) => {
            Promise.all([
              moto.setMake('Husaberg'),
              moto.setModel('FE 390'),
              moto.setModelspec(1),
            ]).then(() => {
              console.log(moto.dataValues);
            });
          });

        Motorcycle.findById(3)
          .then((moto) => {
            Promise.all([
              moto.setMake('KTM'),
              moto.setModel('Freeride 250R'),
              moto.setModelspec(1),
            ]).then(() => {
              console.log(moto.dataValues);
            });
          });

        });
  });
}

