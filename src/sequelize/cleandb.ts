import { User } from './';

export default function cleandb(): Promise<any> {
  return User.sync({ force: true })
    .then(() => {
      return User.create({
        name: 'Viking Garage',
        email: 'viking.garage.app@gmail.com',
        birthday: new Date(1980, 12, 12),
        password: 'secret',
        verified: true,
      })
      .catch(err => console.log('Database clean error', err));
    });
}
