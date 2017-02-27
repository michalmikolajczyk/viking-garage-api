import * as jwt from 'jsonwebtoken'
import config from '../../config'
import { User } from '../../sequelize'

export default function login(req, res, next) {
  let {
    email,
    password,
  } = req.body

  if (!email || !password) {
    return res.status(400).json({
      err: true,
      msg: `Empty field email or password`
    })
  }

  User.findOne({where: {email, password}})
  .then(function(user) {
    if (user === null) {
      return res.status(400).json({
        err: true,
        msg: `User with provided email not exists`,
      })
    }

    let payload = {id: user.dataValues.id}
    let token = jwt.sign(payload, config.jwt.secret)
    return res.status(200).json({
      token,
      err: false,
      msg: `User logged in successfully`,
    })
  })
  .catch(function(err) {
    return res.status(400).json({
      err: true,
      msg: `User with provided email not exists ${err}`,
    })
  })
}

