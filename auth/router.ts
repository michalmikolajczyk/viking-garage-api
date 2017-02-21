import * as express from 'express'
import * as passport from 'passport'
import signin from './signin'
const router = express.Router()

router.post('/signin', signin)

router.post('/login', passport.authenticate('local'),
  function(req, res) {
    // TODO: check filed remeber and set Access-Control-Max-Age
    res.status(200).json({
      error: false,
      msg: 'login success'
    })
  }
)

router.post('/logout', function(req, res) {
  req.logout()
  res.status(200).json({
    error: false,
    msg: 'logout'
  })
})

router.get('/test', function(req, res) {
  if (req.isAuthenticated()) {
    res.status(200).json({
      error: false,
      msg: 'user is authenticated'
    })
  } else {
    res.status(401).json({
      error: true,
      msg: 'user is not authenticated'
    })
  }
})

module.exports = router
