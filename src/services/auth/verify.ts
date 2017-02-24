import { User } from '../../sequelize'

export default function verify(req, res, next) {
  let token = req.query.token
  console.log(req.query)
  console.log(token)
  User.findOne({
    where: {'token': token}
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
