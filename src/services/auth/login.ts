import { login as logIn } from '../../helpers/passport'
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

  logIn(email, password)
  .then(token => {
    res.status(200).json({
      token,
      err: false,
      msg: `User logged in successfully`,
    })
  })
  .catch(err => {
    res.status(400).json({
      err: true,
      msg: `User with provided email or password not exists`,
    })
  })
}

