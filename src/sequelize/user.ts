import * as Sequelize from 'sequelize';

const attributes = {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  birthday: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  verified: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  token: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    allowNull: false,
  },
};

const options = {
  freezeTableName: true,
};

export {
  attributes,
  options,
}
