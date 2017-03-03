import {
  Request,
  Response,
  NextFunction,
} from 'express';
import { login } from '../../helpers/passport';
import { User } from '../../sequelize';
import { v1 } from 'uuid';
import debug from 'debug';
const log = debug('api:verify');

export default function verify(req: Request, res: Response, next: NextFunction): any {
  const { token } = req.body;

  User.findOne({ where: { token } })
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          err: true,
          msg: 'Token expired',
        });
      }

      user.update({
        verified: true,
        token: v1(),
      })
      .then(info => login(user.dataValues.email, user.dataValues.password)
        .then(({ token, user }) => res.status(200)
          .json({
            token,
            err: false,
            msg: 'User verified successfully',
            user: {
              name: user.name,
              email: user.email,
            },
          })
        )
        .catch((err) => {
          log(`Unexpected error ${err}`);
          res.status(400).json({
            err: true,
            msg: 'User not authorized',
          });
        })
      )
      .catch((err) => {
        log(`Unexpected error ${err}`);
        res.status(400).json({
          err: true,
          msg: 'User not authorized',
        });
      });
    })
    .catch((err) => {
      log(`Unexpected error ${err}`);
      res.status(400).json({
        err: true,
        msg: 'Token expired',
      });
    });
}
