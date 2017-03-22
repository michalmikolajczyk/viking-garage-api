import sequelize from './config';
import LocationModel from './models/location';
import OfferModel from './models/offer';
import OffererModel from './models/offerer';
import TagModel from './models/tag';
import UserModel from './models/user';

const freezeTableName = true;
const Location = sequelize.define('location', LocationModel, { freezeTableName });
const Offer = sequelize.define('offer', OfferModel, { freezeTableName });
const Offerer = sequelize.define('offerer', OffererModel, { freezeTableName });
const Tag = sequelize.define('tag', TagModel, { freezeTableName });
const User = sequelize.define('user', UserModel, { freezeTableName });

export {
  Location,
  Offer,
  Offerer,
  Tag,
  User,
}

import { createAll } from './mockups';

// createAll();
