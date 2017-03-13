import sequelize from './config';
import LocationModel from './models/location';
import OfferModel from './models/offer';
import TagModel from './models/tag';
import UserModel from './models/user';

const freezeTableName = true;
const Location = sequelize.define('location', LocationModel, { freezeTableName });
const Offer = sequelize.define('offer', OfferModel, { freezeTableName });
const Tag = sequelize.define('tag', TagModel, { freezeTableName });
const User = sequelize.define('user', UserModel, { freezeTableName });

export {
  Location,
  Offer,
  Tag,
  User,
}

import { createAll } from './mockups';

createAll();
