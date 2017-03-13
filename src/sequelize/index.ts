import sequelize from './config';
import OfferModel from './models/offer';
import TagModel from './models/tag';
import UserModel from './models/user';

const freezeTableName = true;
const Offer = sequelize.define('offers', OfferModel, { freezeTableName });
const Tag = sequelize.define('tags', TagModel, { freezeTableName });
const User = sequelize.define('users', UserModel, { freezeTableName });

export {
  Offer,
  Tag,
  User,
}

import { createAll } from './mockups';

createAll();
