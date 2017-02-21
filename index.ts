import * as express from 'express'
import * as cors from 'cors'
import * as session from 'express-session'
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
// import * as passport from './passportConfig'
import * as userRouter from './auth/router'
import * as config from '../config'
const app = express()

// clean datebase and create sample user
// require('./utils/cleandb')()


import * as passport from 'passport'
import { Strategy } from 'passport-local'
import { User } from './sequelizeModel'

passport.use(new Strategy({
    usernameField: 'email',
    passwordField: 'password',
  },
  function(email, password, done) {
    User.findOne({
      where: {
        'email': email
      }
    })
    .then(function (user) {
      if (user == null) {
        return done(null, false, { message: 'Incorrect credentials.' })
      }

      if (user.password === password) {
        return done(null, user)
      }

      return done(null, false, { message: 'Incorrect credentials.' })
    })
    .catch(done)
  }
))

passport.serializeUser(function(user, done) {
  done(null, user['id'])
})

passport.deserializeUser(function(id, done) {
  User.findOne({
    where: {
      'id': id
    }
  }).then(function (user) {
    if (user == null) {
      done(new Error('Wrong user id.'))
    }

    done(null, user)
  })
})

// export default passport


app.use(cors({
  origin: ['http://localhost:3000', 'http://vikinggarage.com'],
  credentials: true,
}))
app.use(cookieParser())
app.use(session({
  secret: config['session'].secret,
  resave: false,
  saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// app.use('/auth', userRouter);

app.get('/', function(req, res) {
  res.send('Hello world')
})

var server = app.listen(4000, function() {
  console.log('Server running at http://localhost:' + server.address().port)
})

export default app
