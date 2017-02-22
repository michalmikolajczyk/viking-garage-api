import * as passport from 'passport'
import { Message } from '../models/user'

export default function login(req, res, next):Promise<Message> {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', function(err, user, info) {

      if (err) {
        return resolve({
          err: true,
          msg: 'Unexpected error.'
        })
      }

      if (!user) {
        return resolve({
          err: true,
          msg: 'Incorrect credentials.'
        })
      }

      return resolve({
        err: false,
        msg: 'User logged in successfully'
      })

    })(req, res, next)
  })
}
