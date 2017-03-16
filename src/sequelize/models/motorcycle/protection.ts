import * as Sequelize from 'sequelize';

export default {
  name: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
  },
  hemlet: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
  },
  gloves: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
  },
  boots: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
  },
  jacket: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
  },
  vest: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
  },
  chestProtector: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
  },
  buzzer: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
  },
  pants: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
  },
  knees: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
  },
  elbows: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
  },
  goggles: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
  },
  neckBrace: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
  },
};
