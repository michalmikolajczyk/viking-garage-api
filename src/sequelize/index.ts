import * as UserModel from './user';
import sequelize from './config';

const User = sequelize.define('users', UserModel.attributes, UserModel.options);

export { User }
