import UserModel from './user';
import OfferModel from './offer';
import TagModel from './offer/tag';
import TypeModel from './offer/type';
// import OwnerModel from './offer/owner';
import sequelize from './config';

const freezeTableName = true;
const User = sequelize.define('user', UserModel, { freezeTableName });
const Offer = sequelize.define('offers', OfferModel, { freezeTableName });
const Tag = sequelize.define('tags', TagModel, { freezeTableName });
const Type = sequelize.define('types', TypeModel, { freezeTableName });

Offer.belongsTo(Type);

Offer.belongsToMany(Tag, { through: 'OfferTag' });
Tag.belongsToMany(Offer, { through: 'OfferTag' });

export {
  User,
  Offer,
  Tag,
  Type,
}

import {
  createOffers,
  createTags,
  createTypes,
} from './mocks';

// createOffers();
// createTags();
createTypes();
