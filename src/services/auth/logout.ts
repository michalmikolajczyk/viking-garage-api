export default function logout(res: any, req: any, next: any): void {
  // because of JWT there is no session - you have to destroy token on client side
  res.json({
    err: false,
    msg: 'Logged out successfully'
  });
}
