import {
  Request,
  Response,
  NextFunction,
} from 'express';
export default function logout(req: Request, res: Response, next: NextFunction): any {
  // because of JWT there is no session - you have to destroy token on client side
  res.json({
    err: false,
    msg: 'Logged out successfully'
  });
}
