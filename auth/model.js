var Sequelize = require('Sequelize')

var attributes = {
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

var options = {
  freezeTableName: true
}

module.exports = {
  attributes: attributes,
  options: options
}
