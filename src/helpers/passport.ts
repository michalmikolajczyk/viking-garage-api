import * as passport from 'passport'
import * as jwt from 'jsonwebtoken'
import conf from '../config'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { User } from '../sequelize'

export function config(app: any) {
  app.use(passport.initialize())

  passport.use(new Strategy({
      secretOrKey: conf.jwt.secret,
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

export function authorize(req, res, next) {
  return new Promise((resolve, reject) => {
    passport.authenticate('jwt', {session: conf.jwt.session},
      function(err, user, info) {
        if (err || !user) {
          reject(info)
        }
        resolve(user)
      }
    )(req, res, next)
  })
}

export function login(email: string, password: string):Promise<any> {
  return new Promise((resolve, reject) => {
    User.findOne({where: {email, password}})
    .then(function(user) {
      if (user === null) {
        return reject(`User with provided email and password not exists`)
      }

      let payload = {id: user.dataValues.id}
      let token = jwt.sign(payload, conf.jwt.secret)
      return resolve(token)
    })
    .catch(reject)
  })
}
