import { login } from '../../helpers/passport'
import { User } from '../../sequelize'
import { v1 } from 'uuid'

export default function verify(req, res, next) {

  let { token } = req.body

  User.findOne({where: { token }})
  .then(user => {
    if (user === null) {
      return res.status(400).json({
        err: true,
        msg: 'Token expired'
      })
    }

    user.update({
      verified: true,
      token: v1(),
    })
    .then(info => {
      login(user.dataValue.email, user.dataValue.password)
      .then(jwt => {
        res.status(200).json({
          token: jwt,
          err: false,
          msg: `User verified successfully`
        })
      })
      .catch(err => {
        res.status(401).json({
          err: true,
          msg: `User not authorized`
        })
      })
    })
    .catch(err => {
      res.status(400).json({
        err: true,
        msg: `User not authorized`
      })
    })
  })
  .catch(res => {
    res.status(400).json({
      err: true,
      msg: `Token expired`
    })
  })
}
