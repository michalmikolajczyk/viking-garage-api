import sequelize from './config';
import OfferModel from './models/offer';
import TagModel from './models/tag';
import UserModel from './models/user';

const freezeTableName = true;
const Offer = sequelize.define('offers', OfferModel, { freezeTableName });
const Tag = sequelize.define('tags', TagModel, { freezeTableName });
const User = sequelize.define('users', UserModel, { freezeTableName });

// Offer.belongsTo(Tag);

export {
  Offer,
  Tag,
  User,
}

import {
  createOffers,
  createTags,
  createUsers,
} from './mockups';

createUsers();
createOffers();
createTags();

// Offer.find({ where: { id: 1 } })
//   .then(offer => {
//     console.log(offer);
//   })
