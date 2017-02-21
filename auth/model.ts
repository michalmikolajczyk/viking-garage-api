import * as Sequelize from 'Sequelize'

const attributes = {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  birthday: {
    type: Sequelize.DATE,
  },
  password: {
    type: Sequelize.STRING,
  },
}

const options = {
  freezeTableName: true
}

export {
  attributes,
  options,
}
