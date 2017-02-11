var express = require('express')
var router = express.Router()
var passport = require('passport')
var signup = require('./signup')

router.post('/signup', signup)

router.post('/login', passport.authenticate('local'),
  function(req, res) {
    res.send('User login success')
  }
)

module.exports = router

