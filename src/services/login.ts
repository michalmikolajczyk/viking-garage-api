import * as passport from 'passport'
import { Message } from '../models/user'

export default function login(req, res, next):Promise<Message> {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', function(err, user, info) {

      if (err) {
        console.log('Unexpected error')
        resolve({
          err: true,
          msg: 'Unexpected error.'
        })
      }

      if (!user) {
        console.log('Incorrect credentials')
        resolve({
          err: true,
          msg: 'Incorrect credentials.'
        })
      }

      resolve({
        err: false,
        msg: 'User logged in successfully'
      })

    })(req, res, next)
  })
}

