import sequelize from './config';
import MakeModel from './models/motorcycle/make';
import MotorcycleModel from './models/motorcycle/motorcycle';

const freezeTableName = true;
const Make = sequelize.define('make', MakeModel, { freezeTableName });
const Motorcycle = sequelize.define('motorcycle', MotorcycleModel, { freezeTableName });

export {
  Make,
  Motorcycle,
}

import { createAll } from './mockups/motorcycle';

createAll();
