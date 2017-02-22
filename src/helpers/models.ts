import * as UserModel from '../models/model'
import sequelize from './sequelize'

var User = sequelize.define('users', UserModel.attributes, UserModel.options)

export {
  User,
}
