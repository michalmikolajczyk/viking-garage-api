import * as Sequelize from 'sequelize';

export default {
  name: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.STRING,
  },
};
