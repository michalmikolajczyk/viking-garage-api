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
    return res.status(400)
      .json({
        err: true,
        msg: 'Empty field email or password',
      });
  }

  logIn(email, password)
    .then(({ token, user }) => res.status(200)
      .json({
        token,
        err: false,
        msg: 'User logged in successfully',
        user: {
          name: user.name,
          email: user.email,
        },
      }))
    .catch((err) => {
      log(`Unexpected error ${err}`);
      res.status(400).json({
        err: true,
        msg: 'Invalid email or password',
      });
    });
}

