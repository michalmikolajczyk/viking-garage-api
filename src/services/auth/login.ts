import * as passport from 'passport'

export default function login(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return res.status(400).json({
        err: true,
        msg: `Invalid email or password`
      })
    }

    req.logIn(user, function(err) {
      if (err) {
        return res.status(400).json({
          err: true,
          msg: `Invalid email or password`
        })
      }

      return res.status(200).json({
        err: false,
        msg: `User logged in successfully`
      })
    })

  })(req, res, next)
}

