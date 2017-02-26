import { User } from '../../sequelize'

export default function user(req, res, next) {
  User.findOne({
    where: {'token': 'token'}
  })
  .then(user => {
    if (user === null) {
      return res.json({
        err: true,
        msg: 'User with this token does not exists!'
      })
    }
    user.update({verified: true})
    .then(() => {
      res.json({
        err: false,
        msg: 'User verified successfully!'
      })
    })
    .catch(next)
  })
  .catch(next)
}
