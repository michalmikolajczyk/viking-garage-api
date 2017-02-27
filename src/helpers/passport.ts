import * as passport from 'passport'
import config from '../config'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { User } from '../sequelize'

export default function configPassport(app: any) {
  app.use(passport.initialize())

  passport.use(new Strategy({
      secretOrKey: config.jwt.secret,
      jwtFromRequest: ExtractJwt.fromAuthHeader(),
    },
    (payload, next) => {
      User.findOne({where: {'id': payload.id}})
      .then(user => {
        if (user) {
          next(null, user)
        } else {
          next(null, false)
        }
      })
      .catch(err => next(null, false, {message: err}))
    }
  ))
}


