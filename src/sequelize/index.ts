import sequelize from './config';
import OfferModel from './models/offer';
import TypeModel from './models/type';
import UserModel from './models/user';

const freezeTableName = true;
const Offer = sequelize.define('offers', OfferModel, { freezeTableName });
const Type = sequelize.define('types', TypeModel, { freezeTableName });
const User = sequelize.define('users', UserModel, { freezeTableName });

export {
  Offer,
  Type,
  User,
}

import {
  createUsers,
  createOffers,
  createTypes,
} from './mockups';

// createUsers();
// createOffers();
createTypes();
