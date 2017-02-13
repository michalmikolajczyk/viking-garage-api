var express = require('express')
var app = express()
var session = require('express-session')
var bodyParser = require('body-parser')
var passport = require('./passportConfig')
var userRouter = require('./user/router')
var cookieParser = require('cookie-parser')

// clean datebase and create sample user
// require('./utils/cleandb')()

app.use(cookieParser())
app.use(session({ secret: '4564f6s4fdsfdfd', resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/user', userRouter);

app.get('/', function(req, res) {
  res.send('Hello, world!')
})

var server = app.listen(3000, function() {
  console.log('Server running at http://localhost:' + server.address().port)
})
