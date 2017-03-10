import {
  User,
  Offer,
  Tag,
  Type,
} from '../';
import user from './user';
import offers from './offers';
import tags from './tags';
import types from './types';
import debug from 'debug';
const log = debug('api:Sequelize');

export function createAll(): Promise<any> {
  return Promise.all([
    createUser(),
    createOffers(),
    createTags(),
  ]);
}

export function createUser(): Promise<any> {
  return User.sync({ force: true })
    .then(() => User.create(user)
      .catch(err => log('Database cleanUser error', err)));
}

export function createOffers(): Promise<any> {
  return Offer.sync({ force: true })
    .then(() => Offer.bulkCreate(offers)
      .catch(err => log('Database createOffers error', err)));
}

export function createTypes(): Promise<any> {
  return Type.sync({ force: true })
    .then(() => Type.bulkCreate(types)
      .catch(err => log('Database createTypes error', err)));
}

export function createTags(): Promise<any> {
  return Tag.sync({ force: true })
    .then(() => Tag.bulkCreate(tags)
      .catch(err => log('Database createTags error', err)));
}
