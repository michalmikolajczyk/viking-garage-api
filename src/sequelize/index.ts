import UserModel from './models/user';
import sequelize from './config';

const freezeTableName = true;
const User = sequelize.define('users', UserModel, { freezeTableName });

export { User }
