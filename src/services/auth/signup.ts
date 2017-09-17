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

  const newAccount = {
    email,
    password: password1
  }
  const newUser = {
    firstname,
    lastname,
    birthday,
  };

  db['account'].create(newAccount)
    .then(account => db['user'].create(Object.assign({accountId: account.id}, newUser)))
    .then(user => db['account'].update({ userId: user.id }, {where: { id: user.accountId }}))
    .then(account => signupEmail(firstname, email, account.token, language))
    .then(() => res.status(200).json({ msg: 'User created successfully - email sent' }))
    .catch((err) => log(`Unexpected error ${err}`) && res.status(500).json({ err: 'There was an error processing your request' }))
}
