import * as UserModel from './auth/model'
import sequelize from './sequelizeConfig'

var User = sequelize.define('users', UserModel.attributes, UserModel.options)

export {
  User,
}
