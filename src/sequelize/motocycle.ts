import sequelize from './config';
import MakeModel from './models/motorcycle/make';
import ModelModel from './models/motorcycle/model';
import ModelModelspec from './models/motorcycle/modelspec';
import MotorcycleModel from './models/motorcycle/motorcycle';
import MotorspecModel from './models/motorcycle/motorspec';
import ProtectionModel from './models/motorcycle/protection';

const freezeTableName = true;
const Make = sequelize.define('make', MakeModel, { freezeTableName });
const Model = sequelize.define('model', ModelModel, { freezeTableName });
const Modelspec = sequelize.define('modelspec', ModelModelspec, { freezeTableName });
const Motorcycle = sequelize.define('motorcycle', MotorcycleModel, { freezeTableName });
const Motorspec = sequelize.define('motorspec', MotorspecModel, { freezeTableName });
const Protection = sequelize.define('protection', ProtectionModel, { freezeTableName });

export {
  Make,
  Model,
  Modelspec,
  Motorcycle,
  Motorspec,
  Protection,
  sequelize,
}

import { createAll } from './mockups/motorcycle';

createAll();
