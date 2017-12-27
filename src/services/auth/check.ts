import {
  Request,
  Response,
  NextFunction,
} from 'express';
import debug from 'debug';
const log = debug('api:check');

export default function check(req: Request, res: Response, next: NextFunction): any {
  const user = req.user;
  const data = Object.assign({}, user.user.dataValues, { email: user.dataValues.email })
  return res.status(200).json({
    err: false,
    msg: 'User authenticated succesfully',
    user: {
      email: data.email,
      name: data.firstname,
    },
  })
}
