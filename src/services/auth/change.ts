import { User } from '../../sequelize'
import { v1 } from 'uuid'

export default function change(req, res, next) {

  let {
    password1,
    password2,
    token
  } = req.body

  User.findOne({where: { token }})
  .then(user => {
    if (user == null) {
      return res.status(400).json({
        err: true,
        msg: 'Token expired'
      })
    }

    user.update({
      password: password1,
      token: v1(),
    })
    .then(() => res.status(200).json({
      err: false,
      msg: 'Password changed successfully'
    }))
    .catch(err => {
      res.status(400).json({
        err: true,
        msg: 'Token expired'
      })
    })
  })
  .catch(err => {
    res.status(400).json({
      err: true,
      msg: 'Token expired'
    })
  })
}
