import { User } from '../../sequelize'
import { v1 } from 'uuid'

export default function verify(req, res, next) {

  let {
    token
  } = req.body

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
      req.logIn(user, function(err) {
        if (err) {
          return res.status(400).json({
            err: true,
            msg: `Invalid email or password`
          })
        }

        return res.status(200).json({
          err: false,
          msg: `User verified successfully`
        })
      })
    })
    .catch(err => {
      res.status(400).json({
        err: true,
        msg: `Token expired`
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
