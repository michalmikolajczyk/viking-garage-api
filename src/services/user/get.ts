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
  return authenticate(req, res, next)
    .then((account) => {
      const data = Object.assign({}, account.user.dataValues, { email: account.dataValues.email })
      return res.status(200).json({ data });
    })
    .catch((err) => {
      log(`User is not authorized ${err}`);
      return res.status(401).json(error.unauthorized);
    });
}
