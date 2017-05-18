import {
  Request,
  Response,
  NextFunction,
} from 'express';
import { authenticate } from '../../helpers/passport';
import debug from 'debug';
const log = debug('api:user/put');
import db from '../../sequelize';

export default function put(req: Request, res: Response, next: NextFunction): any {
  authenticate(req, res, next)
    .then(user => {
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
      .then(() => res.status(204).end())
      .catch(err => res.status(500).json({ err: 'There was an error processing your request' }))
  })
  .catch((err) => {
    log(`User is not authorized ${err}`);
    res.status(401).json({ err: 'User is not authorized' });
  });

}
