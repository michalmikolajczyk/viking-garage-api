import {
  Request,
  Response,
  NextFunction,
} from 'express';
import db from '../../sequelize';
import { resetEmail } from '../../mailer';
import debug from 'debug';
const log = debug('api:reset');

export default function reset(req: Request, res: Response, next: NextFunction): any {
  const {
    email,
    language,
  } = req.body;

  return db['account'].findOne({ where: { email }, include: ['user'] })
    .then(account => resetEmail(account.user.firstname, account.email, account.token, language))
    .then(info => res.status(200).json({
      err: false,
      msg: 'Please check your e-mail inbox for instructions',
    }))
    .catch((err) => {
      log(`Unexpected error ${err}`);
      res.status(200).json({
        err: true,
        msg: 'Please check your e-mail inbox for instructions',
      });
    });
}
