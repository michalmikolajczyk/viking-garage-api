import * as passport from 'passport'
import { Strategy } from 'passport-local'
import { User } from '../sequelize'

export default function config(app: any) {
  app.use(passport.initialize())
  app.use(passport.session())

  passport.use(new Strategy({
      usernameField: 'email',
      passwordField: 'password',
    },
    function(email, password, done) {
      User.findOne({
        where: {
          'email': email
        }
      })
      .then(function(user) {
        if (user == null) {
          return done(null, false, { message: 'Incorrect credentials.' })
        }

        if (user.verified === false) {
          return done(null, false, { message: 'User not verified - check out inbox'})
        }

        if (user.password !== password) {
          return done(null, false, { message: 'Incorrect credentials.' })
        }

        return done(null, user)
      })
      .catch(function(err) {
        done(null, false, { message: err})
      })
    }
  ))

  passport.serializeUser(function(user, done) {
    done(null, user['id'])
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
}


