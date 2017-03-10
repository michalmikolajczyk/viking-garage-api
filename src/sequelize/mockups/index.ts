import {
  User,
  Offer,
} from '../';
import users from './users';
import offers from './offers';
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
