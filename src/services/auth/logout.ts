export default function logout(res, req, next) {
  req.logout()
  res.json({
    err: false,
    msg: 'User log out successfully'
  })
}
