import {
  Offer,
  Type,
  User,
} from '../';
import offers from './offers';
import types from './types';
import users from './users';
import debug from 'debug';
const log = debug('api:Sequelize');

export function createUsers(): Promise<any> {
  return User.sync({ force: true })
    .then(() => User.bulkCreate(users))
    .catch(err => log('Database bulkCreate error', err));
}

export function createOffers(): Promise<any> {
  return Offer.sync({ force: true })
    .then(() => Offer.bulkCreate(offers))
    .catch(err => log('Database bulkCreate error', err));
}

export function createTypes(): Promise<any> {
  return Type.sync({ force: true })
    .then(() => Type.bulkCreate(types))
    .catch(err => log('Database bulkCreate error', err));
}
