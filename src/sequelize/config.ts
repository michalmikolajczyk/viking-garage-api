import Sequelize from 'sequelize';

const environments = [
  ['dev', 'DATABASE_URL_DEV'],
  ['test', 'DATABASE_URL_TEST'],
  ['production', 'DATABASE_URL']
]
const sequelize = {}
environments.forEach(env => sequelize[env[0]] = new Sequelize(process.env[env[1]], {
  dialect: 'postgres',
  dialectOptions: {
    ssl: process.env.DATABASE_SSL === 'true',
  },
}))

export default sequelize;
