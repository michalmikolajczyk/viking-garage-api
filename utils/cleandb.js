var User = require('../sequelizeModel').User

module.exports = function() {
  // recreate User table
  return User.sync({ force: true }).then(function() {
    // create new User
    return User.create({
      name: 'Viking Garage',
      email: 'viking@garage.com',
      birtday: new Date(1980, 6, 20),
      password: 'secret',
    })
  })
}
