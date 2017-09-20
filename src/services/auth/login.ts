import {
  Request,
  Response,
  NextFunction,
} from 'express';
import { login as logIn } from '../../helpers/passport';
import debug from 'debug';
const log = debug('api:login');

export default function login(req: Request, res: Response, next: NextFunction): any {
  const {
    email,
    password,
  } = req.body;

  if (!email || !password) {
    return res.status(400).json({ err: 'Empty field email or password' });
  }

  logIn(email, password)
    .then(({ token, account }) => {
      const user = Object.assign({}, account.user.dataValues, { email: account.dataValues.email })
      const data = { token, user }
      return res.status(200).json({ data });
    })
    .catch((err) => {
      log(`Unexpected error ${err}`);
      return res.status(400).json({ err: 'Invalid email or password' });
    });
}
