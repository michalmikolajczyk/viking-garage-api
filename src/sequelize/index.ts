import sequelize from './config';
import UserModel from './models/user';
import OfferModel from './models/offer';

const freezeTableName = true;
const User = sequelize.define('users', UserModel, { freezeTableName });
const Offer = sequelize.define('offers', OfferModel, { freezeTableName });

export {
  User,
  Offer,
}

import {
  createUsers,
  createOffers,
} from './mockups';

// createUsers();
createOffers();
