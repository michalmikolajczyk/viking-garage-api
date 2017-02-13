var express = require('express')
var app = express()
var session = require('express-session')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var passport = require('./passportConfig')
var userRouter = require('./auth/router')
var config = require('./config')

// clean datebase and create sample user
// require('./utils/cleandb')()

app.use(cookieParser())
app.use(session({
  secret: config.session.secret,
  resave: false,
  saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/auth', userRouter);

app.get('/', function(req, res) {
  res.send('Hello world')
})

var server = app.listen(3000, function() {
  console.log('Server running at http://localhost:' + server.address().port)
})

module.exports = app
