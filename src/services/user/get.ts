import {
  Request,
  Response,
  NextFunction,
} from 'express';
import { authenticate } from '../../helpers/passport';
import * as error from '../error';
import debug from 'debug';
const log = debug('api:user/get');

export default function get(req: Request, res: Response, next: NextFunction): any {
  const user = req.user;
  const data = Object.assign({}, user.user.dataValues, { email: user.dataValues.email })
  return res.status(200).json({ data });
}
