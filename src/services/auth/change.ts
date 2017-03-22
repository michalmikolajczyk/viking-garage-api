import {
  Request,
  Response,
  NextFunction,
} from 'express';
import db from '../../sequelize';
import { v1 } from 'uuid';
import debug from 'debug';
const log = debug('api:change');

export default function change(req: Request, res: Response, next: NextFunction): any {
  const {
    password1,
    password2,
    token,
  } = req.body;

  db['user'].findOne({ where: { token } })
  .then((user) => {
    if (!user) {
      return res.status(400)
        .json({
          err: true,
          msg: 'Your reset token has expired, please reset the password again',
        });
    }

    user.update({
      password: password1,
      token: v1(),
    })
    .then(() => res.status(200)
      .json({
        err: false,
        msg: 'Password changed successfully',
      }))
    .catch((err) => {
      log(`Unexpected error ${err}`);
      res.status(500).json({
        err: true,
        msg: 'There was an error processing your request',
      });
    });
  })
  .catch((err) => {
    log(`Unexpected error ${err}`);
    res.status(500).json({
      err: true,
      msg: 'There was an error processing your request',
    });
  });
}
