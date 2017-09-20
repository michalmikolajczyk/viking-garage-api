import {
  Request,
  Response,
  NextFunction,
} from 'express';
import { login } from '../../helpers/passport';
import db from '../../sequelize';
import { v1 } from 'uuid';
import debug from 'debug';
const log = debug('api:verify');

export default function verify(req: Request, res: Response, next: NextFunction): any {
  const { token } = req.body;

  db['account'].findOne({ where: { token } })
    .then(account => account.update({
      verified: true,
      token: v1(),
    }))
    .then(account => login(account.email, account.password))
    .then(({ token, account }) => res.status(200).json({
      token,
      err: false,
      msg: 'email verified successfully',
      user: {
        name: account.user.firstname,
        email: account.email,
      },
    }))
    .catch((err) => {
      log(`Unexpected error ${err}`);
      return res.status(400).json({
        err: true,
        msg: 'User not authorized',
      });
    });
}
