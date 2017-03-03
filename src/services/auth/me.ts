import { User } from '../../sequelize'

export default function me(req, res, next) {
  if (req.isAuthenticated()) {
    res.status(200).json({
      err: false,
      msg: 'User is logged in',
      user: req.user
    })
  } else {
    res.json({
      err: false,
      msg: 'User is not logged in',
      user: false,
    })
  }
}