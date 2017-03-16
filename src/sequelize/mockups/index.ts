import {
  Location,
  Offer,
  Offerer,
  Tag,
  User,
} from '../';
import sequelize from '../config';
import locations from './locations';
import offers from './offers';
import offerers from './offerers';
import tags from './tags';
import users from './users';
import debug from 'debug';
const log = debug('api:Sequelize');

export function createLocations(): Promise<any> {
  return Location.sync({ force: true })
    .then(() => Location.bulkCreate(locations))
    .catch(err => log('Database bulkCreate error', err));
}

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

export function createOfferers(): Promise<any> {
  return Offerer.sync({ force: true })
    .then(() => Offerer.bulkCreate(offerers))
    .catch(err => log('Database bulkCreate error', err));
}

export function createTags(): Promise<any> {
  return Tag.sync({ force: true })
    .then(() => Tag.bulkCreate(tags))
    .catch(err => log('Database bulkCreate error', err));
}

export function createRelations(): Promise<any> {

  Offer.belongsToMany(Tag, { through: 'OfferTag' });
  Tag.belongsToMany(Offer, { through: 'OfferTag' });

  Offer.belongsTo(Location);
  Offer.belongsTo(Offerer);

  return sequelize.sync({ force: true });
}

export function createAll() {
  createRelations().then(() => {
    Promise.all([
      createLocations(),
      createUsers(),
      createOffers(),
      createOfferers(),
      createTags(),
    ]).then(() => {
        Offer.findById(1)
          .then((offer) => {
            Promise.all([
              offer.setTags([3, 5, 7, 8]),
              offer.setLocation(1),
              offer.setOfferer(1),
            ]).then(() => {
              console.log(offer);
            });
          });
        });
  });
}

