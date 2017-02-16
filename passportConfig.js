var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var User = require('./sequelizeModel').User

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  },
  function(email, password, done) {
    User.findOne({
      where: {
        'email': email
      }
    })
    .then(function (user) {
      if (user == null) {
        return done(null, false, { message: 'Incorrect credentials.' })
      }

      if (user.password === password) {
        return done(null, user)
      }

      return done(null, false, { message: 'Incorrect credentials.' })
    })
    .catch(done)
  }
))

passport.serializeUser(function(user, done) {
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  User.findOne({
    where: {
      'id': id
    }
  }).then(function (user) {
    if (user == null) {
      done(new Error('Wrong user id.'))
    }

    done(null, user)
  })
})

module.exports = passport
