import {
  Request,
  Response,
  NextFunction,
} from 'express';
import { signinEmail } from '../../mailer';
import db from '../../sequelize';
import debug from 'debug';
const log = debug('api:resend');

export default function resend(req: Request, res: Response, next: NextFunction): any {
  const {
    email,
    language,
  } = req.body;

  if (!email) {
    return res.status(400)
      .json({
        err: true,
        msg: 'Please fill in all the fields.',
      });
  }

  db['user'].findOne({ where: { email } })
    .then(user => signinEmail(user.dataValues.name, email, user.dataValues.token, language)
      .then(() => res.status(200)
        .json({
          err: false,
          msg: 'Resend email successfully',
        }))
      .catch((err) => {
        log(`Unexpected error ${err}`);
        res.status(500).json({
          err: true,
          msg: 'There was an error processing your request',
        });
      }))
    .catch((err) => {
      log(`Unexpected error ${err}`);
      res.status(500).json({
        err: true,
        msg: 'There was an error processing your request',
      });
    });
}
