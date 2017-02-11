var Sequelize = require('Sequelize')
var sequelizeConfig = require('../sequelizeConfig');

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

var User = sequelizeConfig.define('users', attributes, options)
module.exports = User;
