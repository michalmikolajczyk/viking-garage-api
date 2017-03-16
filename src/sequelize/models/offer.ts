import * as Sequelize from 'sequelize';

const types = [
  'club',
  'coach',
  'guide',
  'mechanic',
  'motocross',
  'motocycle',
  'photographer',
  'transport',
  'garage',
];

export default {
  title: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  type: {
    allowNull: false,
    type: Sequelize.ENUM,
    values: types,
  },
};
