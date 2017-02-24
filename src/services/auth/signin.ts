import { signinMail } from '../../helpers/nodemailer'
import { User } from '../../sequelize'

export default function signin(req, res, next):any {
  return new Promise((resolve, reject) => {
    var name = req.body.name
    var email = req.body.email
    var birthday = req.body.birthday
    var password1 = req.body.password1
    var password2 = req.body.password2

    if (!name || !email || !birthday || !password1 || !password2) {
      return resolve({
        err: true,
        msg: 'Please fill in all the fields.'
      })
    }

    if (password1 !== password2) {
      return resolve({
        err: true,
        msg: 'Please enter the same password twice.'
      })
    }

    var newUser = {
      name: name,
      email: email,
      birthday: birthday,
      password: password1,
    }

    User.create(newUser)
    .then(user => {
      return signinMail(email, user.dataValues.token, resolve)
    })
    .catch((err) => {
      // http://stackoverflow.com/questions/3825990/http-response-code-for-post-when-resource-already-exists
      return resolve({
        err: true,
        msg: `User with provided email already exists ${err}`
      })
    })
  })
}
