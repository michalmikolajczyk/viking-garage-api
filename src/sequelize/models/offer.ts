import * as Sequelize from 'sequelize';
import types from './type';

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
