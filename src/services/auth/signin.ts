import { signinMail } from '../../helpers/nodemailer'
import { User } from '../../sequelize'

export default function signin(req, res, next):any {
  let {
    name,
    email,
    birthday,
    password
  } = req.body

  if (!name || !email || !birthday || !password) {
    return next('Please fill in all the fields.')
  }

  var newUser = {
    name: name,
    email: email,
    birthday: birthday,
    password: password,
  }

  User.create(newUser)
  .then(user => {
    signinMail(email, user.dataValues.token)
    .then(() => res.json({
      err: false,
      msg: 'User created successfully - email sent'
    }))
    .catch(next)
  })
  .catch(err => {
    next(`Unexpected error ${err}`)
  })
}
