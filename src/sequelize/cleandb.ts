import { User } from './'

export default function cleandb() {
  // recreate User table
  return User.sync({ force: true }).then(function() {
    // create new User
    return User.create({
      name: 'Viking Garage',
      email: 'viking@garage.com',
      birthday: new Date(1980, 12, 12),
      password: 'secret',
      verified: true
    })
    .then(user => {
      console.log('Database cleaned, user created', user.dataValues)
    })
    .catch(err => {
      console.log('Database clean error', err)
    })
  })
}
