import * as passport from 'passport'

export default function login(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err) }

    req.logIn(user, function(err) {
      if (err) { return next(err) }

      return res.json({
        err: false,
        msg: `User logged in successfully`
      })
    })

  })(req, res, next)
}

