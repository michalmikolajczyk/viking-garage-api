export default function logout(res, req, next) {
  // because of JWT, there is no session - you have to destroy token on client side
  res.json({
    err: false,
    msg: 'User log out successfully'
  })
}
