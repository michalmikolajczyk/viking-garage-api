import {
  Offer,
  Tag,
  User,
} from '../';
import sequelize from '../config';
import offers from './offers';
import tags from './tags';
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

export function createTags(): Promise<any> {
  return Tag.sync({ force: true })
    .then(() => Tag.bulkCreate(tags))
    .catch(err => log('Database bulkCreate error', err));
}

export function createAll() {

  Promise.all([
    createUsers(),
    createOffers(),
    createTags(),
  ]).then(() => {

    Offer.belongsToMany(Tag, { through: 'OfferTag' });
    Tag.belongsToMany(Offer, { through: 'OfferTag' });

    sequelize.sync().then(() => {
      Offer.find({ where: { id: 1 } })
        .then(offer => {
          console.log(offer.dataValues);
          offer.setTags([1, 2]).then(() => {
            offer.getTags().then((tag) => {
              console.log(tag.map(t => t.dataValues));
            })
          })
        })
      })
  })
}

