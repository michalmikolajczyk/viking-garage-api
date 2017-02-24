import * as UserModel from './user'
import sequelize from './config'

var User = sequelize.define('users', UserModel.attributes, UserModel.options)

export {
  User,
}
