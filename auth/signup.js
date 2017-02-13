var User = require('../sequelizeModel').User

module.exports = function(req, res, next) {

  var name = req.body.name
  var email = req.body.email
  var birthday = req.body.birthday
  var password1 = req.body.password1
  var password2 = req.body.password2

  if (!name || !email || !birthday || !password1 || !password2) {
    return res.status(400).json({
      error: true,
      msg: 'Please fill in all the fields.'
    })
  }

  if (password1 !== password2) {
    return res.status(400).json({
      error: true,
      msg: 'Please enter the same password twice.'
    })
  }

  var newUser = {
    name: name,
    email: email,
    birthday: birthday,
    password: password1,
  }

  return User.create(newUser)
  .then(function() {
    res.send('User created successfully')
  })
  .catch(function(error) {
    // http://stackoverflow.com/questions/3825990/http-response-code-for-post-when-resource-already-exists
    res.status(409).json({
      error: true,
      msg: 'User with provided email already exists.'
    })
  })
}
