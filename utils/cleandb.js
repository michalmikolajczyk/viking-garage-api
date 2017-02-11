var User = require('../user/model')

module.exports = function(callback) {
  // recreate User table
  User.sync({ force: true }).then(function() {
    // create new User
    User.create({
      name: 'Viking Garage',
      email: 'viking@garage.com',
      birtday: new Date(1980, 6, 20),
      password: 'secret',
    }).then(callback)
  })
}
