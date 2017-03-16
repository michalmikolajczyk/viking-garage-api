import sequelize from './config';
import MakeModel from './models/motorcycle/make';
import ModelModel from './models/motorcycle/model';
import ModelModelspec from './models/motorcycle/modelspec';
import MotorcycleModel from './models/motorcycle/motorcycle';

const freezeTableName = true;
const Make = sequelize.define('make', MakeModel, { freezeTableName });
const Model = sequelize.define('model', ModelModel, { freezeTableName });
const Modelspec = sequelize.define('modelspec', ModelModelspec, { freezeTableName });
const Motorcycle = sequelize.define('motorcycle', MotorcycleModel, { freezeTableName });

export {
  Make,
  Model,
  Modelspec,
  Motorcycle,
}

import { createAll } from './mockups/motorcycle';

createAll();
