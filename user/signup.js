var User = require('./model')

module.exports = function(req, res, next) {

  var name = req.body.name
  var email = req.body.email
  var birthday = req.body.birthday
  var password1 = req.body.password1
  var password2 = req.body.password2

  if (!name || !email || !birthday || !password1 || !password2) {
    res.send('Please fill in all the fields.')
  }

  if (password1 !== password2) {
    res.send('Please enter the same password twice.')
  }

  var newUser = {
    name: name,
    email: email,
    birthday: birthday,
    password: password1,
  }

  User.create(newUser).then(function() {
    res.send('User created successfully')
  }).catch(function(error) {
    res.send('User with provided email already exists.')
  })
}
