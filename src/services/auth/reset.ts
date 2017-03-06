import {
  Request,
  Response,
  NextFunction,
} from 'express';
import { User } from '../../sequelize';
import { resetEmail } from '../../helpers/nodemailer';
import debug from 'debug';
const log = debug('api:reset');

export default function reset(req: Request, res: Response, next: NextFunction): any {
  const { email } = req.body;

  User.findOne({ where: { email } })
    .then((user) => {
      if (!user) {
        return res.status(400)
          .json({
            err: true,
            msg: 'User with provided email does not exists',
          });
      }

      resetEmail(user.email, user.token)
        .then(info => res.status(200)
          .json({
            err: false,
            msg: 'Email with reset link sent successfully',
          }))
        .catch((err) => {
          log(`Unexpected error ${err}`);
          res.status(500).json({
            err: true,
            msg: 'There was an error with sending the reset link email',
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
