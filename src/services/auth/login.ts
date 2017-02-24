import * as passport from 'passport'

export default function login(req, res, next):any {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', function(err, user, info) {

      if (err) {
        return res.json({
          err: true,
          msg: 'Unexpected error.'
        })
      }

      if (!user) {
        return res.json({
          err: true,
          msg: 'Incorrect credentials.'
        })
      }

      if (!user.verified) {
        return res.json({
          err: true,
          msg: 'User not verified - check your inbox!'
        })
      }

      return res.json({
        err: false,
        msg: 'User logged in successfully'
      })

    })(req, res, next)
  })
}
