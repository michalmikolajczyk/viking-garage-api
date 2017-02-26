import { User } from '../../sequelize'
import { resetEmail } from '../../helpers/nodemailer'

export default function reset(req, res, next) {

  let {
    email
  } = req.body

  User.findOne({where: { email }})
  .then(user => {
    if (user == null) {
      return res.status(400).json({
        err: true,
        msg: 'User with provided email does not exists'
      })
    }

    resetEmail(user.email, user.token)
    .then(info => {
      return res.status(200).json({
        err: false,
        msg: 'Email with reset link sent successfully'
      })
    })
    .catch(err => {
      return res.status(500).json({
        err: true,
        msg: `Email sending error ${err}`
      })
    })
  })
  .catch(err => {
    res.status(400).json({
      err: true,
      msg: `User with provided email does not exists ${err}`
    })
  })
}
