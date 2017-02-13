var UserModel = require('./auth/model')
var sequelize = require('./sequelizeConfig')

var User = sequelize.define('users', UserModel.attributes, UserModel.options)

module.exports = {
  User: User,
}
