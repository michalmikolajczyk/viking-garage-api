import {
  Request,
  Response,
  NextFunction,
} from 'express';

export default function me(req: Request, res: Response, next: NextFunction): any {
  if (req.isAuthenticated()) {
    res.status(200).json({
      err: false,
      msg: 'User is logged in',
      user: req.user,
    });
  } else {
    res.status(401).json({
      err: false,
      msg: 'User is not logged in',
      user: false,
    });
  }
}
