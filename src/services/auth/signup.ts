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
    consent,
    email,
    password1,
    password2,
    language,
  } = req.body;

  if (!consent || !email || !password1 || password1 !== password2) return res.status(400).json({
    err: 'Please fill in all the fields.' });

  const newAccount = {
    consent,
    email,
    password: password1,
  }

  const split = email.split('@')[0]
  const firstname = split.charAt(0).toUpperCase() + split.slice(1)

  return db['account'].create(newAccount)
    .then(account => db['user'].create({ accountId: account.id }))
    .then(user => db['account'].findOne({ where: { id: user.accountId } }))
    .then(account => signupEmail(firstname, account.email, account.token, language))
    .then(() => res.status(200).json({ msg: 'User created successfully - email sent' }))
    .catch((err) => {
      log(err)
      return res.status(500).json({ err: 'There was an error processing your request' })
    })
}
