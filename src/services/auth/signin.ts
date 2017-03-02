import { signinEmail } from '../../helpers/nodemailer'
import { User } from '../../sequelize'

export default function signin(req, res, next):any {
  let {
    name,
    email,
    birthday,
    password1,
    password2,
  } = req.body

  if (!name || !email || !birthday || !password1) {
    return res.status(400).json({
      err: true,
      msg: 'Please fill in all the fields.'
    })
  }

  var newUser = {
    name,
    email,
    birthday,
    password: password1,
  }

  User.create(newUser)
  .then(user => {
    signinEmail(email, user.dataValues.token)
    .then(() => {
        res.status(200).json({
        err: false,
        msg: 'User created successfully - email sent'
      })
    })
    .catch(err => {
      res.status(500).json({
        err: true,
        msg: 'There was an error processing your request'
      })
    })
  })
  .catch(err => {
    res.status(500).json({
      err: true,
      msg: 'There was an error processing your request'
    })
  })
}
