var express = require('express')
var router = express.Router()
var passport = require('passport')
var signup = require('./signup')

router.post('/signup', signup)

router.post('/login', passport.authenticate('local'),
  function(req, res) {
    // TODO: check filed remeber and set Access-Control-Max-Age
    res.status(200).send('login success')
  }
)

router.post('/logout', function(req, res) {
  req.logout()
  res.status(200).send('logout')
})

router.get('/test', function(req, res) {
  if (req.isAuthenticated()) {
    res.status(200).send('user is authenticated')
  } else {
    res.status(401).send('user is not authenticated')
  }
})

module.exports = router

