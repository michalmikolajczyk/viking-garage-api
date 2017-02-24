
export default function check(req, res, next) {
  console.log(req.isAuthenticated())
  console.log(req.user)
   if (req.isAuthenticated()) {
    res.json({
      err: false,
      msg: 'User is logged in :)'
    })
  } else {
    res.json({
      err: false,
      msg: 'User is not logged in ;('
    })
  }
}
