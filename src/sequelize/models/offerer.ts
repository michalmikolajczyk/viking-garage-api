import * as Sequelize from 'sequelize';

export default {
  name: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  picture: {
    allowNull: false,
    type: Sequelize.STRING,
  },
};
