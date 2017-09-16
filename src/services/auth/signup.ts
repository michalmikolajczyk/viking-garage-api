import {
  Request,
  Response,
  NextFunction,
} from 'express';
import { signupEmail } from '../../mailer';
import db from '../../sequelize';
import debug from 'debug';
const log = debug('api:signup');

export default function signup(req: Request, res: Response, next: NextFunction): any {
  const {
    firstname,
    lastname,
    email,
    birthday,
    password1,
    password2,
    language,
  } = req.body;

  if (!firstname || !lastname || !email || !birthday || !password1) return res.status(400).json({ err: 'Please fill in all the fields.' });

  const newUser = {
    firstname,
    lastname,
    email,
    birthday,
    password: password1,
  };

  db['user'].create(newUser)
    .then(user => signupEmail(firstname, email, user.dataValues.token, language)
      .then(() => res.status(200).json({ msg: 'User created successfully - email sent' }))
      .catch((err) => {
        log(`Unexpected error ${err}`);
        res.status(500).json({ err: 'There was an error processing your request' });
      }))
    .catch((err) => {
      log(`Unexpected error ${err}`);
      res.status(500).json({ err: 'There was an error processing your request' });
    });
}
