import {
  Request,
  Response,
  NextFunction,
} from 'express';
import { signinEmail } from '../../helpers/nodemailer';
import { User } from '../../sequelize';
import debug from 'debug';
const log = debug('api:signin');

export default function signin(req: Request, res: Response, next: NextFunction): any {
  const {
    name,
    email,
    birthday,
    password1,
    password2,
  } = req.body;

  if (!name || !email || !birthday || !password1) {
    return res.status(400).json({
      err: true,
      msg: 'Please fill in all the fields.',
    });
  }

  const newUser = {
    name,
    email,
    birthday,
    password: password1,
  };

  User.create(newUser)
    .then(user => signinEmail(email, user.dataValues.token)
      .then(() => res.status(200)
        .json({
          err: false,
          msg: 'User created successfully - email sent',
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
