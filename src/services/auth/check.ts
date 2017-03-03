import {
  Request,
  Response,
  NextFunction,
} from 'express';
import { authorize } from '../../helpers/passport';
import debug from 'debug';
const log = debug('api:check');

export default function check(req: Request, res: Response, next: NextFunction): any {
  authorize(req, res, next)
    .then(user => res.status(200)
      .json({
        err: false,
        msg: 'User authorized succesfully',
        user: {
          email: user.email,
          name: user.name,
        },
      })
    )
    .catch((err) => {
      log(`Unexpected error ${err}`);
      res.status(401).json({
        err: true,
        msg: 'User is not authorized',
      });
    });
}
