import {
  Request,
  Response,
  NextFunction,
} from 'express';
import { authenticate } from '../../helpers/passport';
import * as error from '../error';
import db from '../../sequelize';
import debug from 'debug';
const log = debug('api:user/put');

export default function put(req: Request, res: Response, next: NextFunction): any {
  authenticate(req, res, next)
    .then((user) => {
      const {
        firstname,
        lastname,
        email,
        birthday,
        phone,
        emergency,
        city,
        country,
        brief,
        image,
      } = req.body;

      user.update({
        firstname,
        lastname,
        email,
        birthday,
        phone,
        emergency,
        city,
        country,
        brief,
        image,
      })
        .then(() => res.status(200).json({ msg: 'ok' }))
        .catch(err => res.status(500).json(error.unexpected));
  })
  .catch((err) => {
    log(`User is not authorized ${err}`);
    res.status(401).json(error.unauthorized);
  });

}
