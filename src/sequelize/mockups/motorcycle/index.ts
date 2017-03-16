import {
  Make,
  Motorcycle,
} from '../../motocycle';
import sequelize from '../../config';
import makes from './makes';
import motorcycles from './motorcycles';
import debug from 'debug';
const log = debug('api:Sequelize');

export function createMakes(): Promise<any> {
  return Make.sync({ force: true })
    .then(() => Make.bulkCreate(makes))
    .catch(err => log('Database bulkCreate error', err));
}

export function createMotorcycles(): Promise<any> {
  return Motorcycle.sync({ force: true })
    .then(() => Motorcycle.bulkCreate(motorcycles))
    .catch(err => log('Database bulkCreate error', err));
}

export function createRelations(): Promise<any> {
  Motorcycle.belongsTo(Make);
  return sequelize.sync({ force: true });
}


export function createAll() {
  createRelations().then(() => {
    Promise.all([
      createMakes(),
      createMotorcycles(),
    ]).then(() => {
        Motorcycle.findById(1)
          .then((moto) => {
            Promise.all([
              moto.setMake('KTM'),
            ]).then(() => {
              console.log(moto.dataValues);
            });
          });
        });

        Motorcycle.findById(2)
          .then((moto) => {
            Promise.all([
              moto.setMake('Husaberg'),
            ]).then(() => {
              console.log(moto.dataValues);
            });
          });
        });

        Motorcycle.findById(3)
          .then((moto) => {
            Promise.all([
              moto.setMake('KTM'),
            ]).then(() => {
              console.log(moto.dataValues);
            });
          });
        });

  });
}

