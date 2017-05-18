import {
  Request,
  Response,
  NextFunction,
} from 'express';
import { authenticate } from '../../helpers/passport';
import err from '../error';
import debug from 'debug';
const log = debug('api:user/get');

export default function get(req: Request, res: Response, next: NextFunction): any {
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
      } = user;

      res.status(200).json({
          data: {
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
          },
        });
    })
    .catch((err) => {
      log(`User is not authorized ${err}`);
      res.status(401).json(err.unauthorized);
    });
}
