import { User } from '../';
import users from './users';
import debug from 'debug';
const log = debug('api:Sequelize');

export function createUsers(): Promise<any> {
  return User.sync({ force: true })
    .then(() => User.bulkCreate(users))
    .catch(err => log('Database bulkCreate error', err));
}
