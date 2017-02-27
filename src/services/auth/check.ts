import * as passport from 'passport'

export default function check(req, res, next) {
  passport.authenticate('jwt', {session: false}, function(err, user, info) {
    if (err || !user) {
      return res.status(401).json({
        err: false,
        msg: 'User is not auth :('
      })
    }

    res.json({
      err: false,
      msg: 'User is authorized :)'
    })
  })(req, res, next)
}
