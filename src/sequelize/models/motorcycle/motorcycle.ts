import * as Sequelize from 'sequelize';

const types = [
  'cruiser',
  'enduro',
  'motocross',
  'naked bike',
  'rally raid',
  'roadster',
  'track racing',
  'trail',
  'trails',
  'tricycles',
];

const licences = [
  'not required',
  'cat. A',
  'cat. B',
];

export default {
// make as forein key
// model as forein key
// insurance forein key
  year: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  type: {
    allowNull: false,
    type: Sequelize.ENUM,
    values: types,
  },
  maxPeople: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  roadLegal: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
  },
  licenseRequired: {
    allowNull: false,
    type: Sequelize.ENUM,
    values: licences,
  },
  minRentalPeriod: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  maxRentalPeriod: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  termsOfUse: {
    allowNull: false,
    type: Sequelize.STRING,
  },
};
