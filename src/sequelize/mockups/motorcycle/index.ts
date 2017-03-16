import {
  Make,
  Model,
  Modelspec,
  Motorcycle,
  Motorspec,
  Protection,
  sequelize,
} from '../../motocycle';
import makes from './makes';
import models from './models';
import modelspecs from './modelspecs';
import motorcycles from './motorcycles';
import motorspecs from './motorspecs';
import protections from './protections';
import debug from 'debug';
const log = debug('api:Sequelize');

export function createMakes(): Promise<any> {
  return Make.bulkCreate(makes);
}

export function createModels(): Promise<any> {
  return Model.bulkCreate(models);
}

export function createModelspecs(): Promise<any> {
  return Modelspec.bulkCreate(modelspecs);
}

export function createMotorcycles(): Promise<any> {
  return Motorcycle.bulkCreate(motorcycles);
}

export function createMotorspecs(): Promise<any> {
  return Motorspec.bulkCreate(motorspecs);
}

export function createProtections(): Promise<any> {
  return Protection.bulkCreate(protections);
}

export function createRelations(): Promise<any> {
  return sequelize.sync({ force: true })
    .then(() => {
      Motorcycle.belongsTo(Make);
      Motorcycle.belongsTo(Model);
      Motorcycle.belongsTo(Modelspec);
      Motorcycle.belongsTo(Motorspec);
      Motorcycle.belongsTo(Protection);
      return sequelize.sync({ force: true });
    })
    .catch(err => log('sequielize.drop error', err))
}

export function createAll() {
  createRelations().then(() => {
    Promise.all([
      createMakes(),
      createModels(),
      createModelspecs(),
      createMotorcycles(),
      createMotorspecs(),
      createProtections(),
    ]).then(() => {
        Motorcycle.findById(1)
          .then((moto) => {
            Promise.all([
              moto.setMake('KTM'),
              moto.setModel('SX 125'),
              moto.setModelspec(1),
              // moto.setMotorspec(1),
              moto.setProtection(1),
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
              // moto.setMotorspec(1),
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
              // moto.setMotorspec(1),
            ]).then(() => {
              console.log(moto.dataValues);
            });
          });

        });
  });
}

