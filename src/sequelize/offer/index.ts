import * as Sequelize from 'sequelize';

export default {
  title: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  description: {
    allowNull: false,
    type: Sequelize.TEXT,
  },
};
