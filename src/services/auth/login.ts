import { login as logIn } from '../../helpers/passport';
import { User } from '../../sequelize';

export default function login(req: any, res: any, next: any): void {
  const {
    email,
    password,
  } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      err: true,
      msg: `Empty field email or password`
    });
  }

  logIn(email, password)
    .then(({ token, user }) => {
      res.status(200).json({
        token,
        err: false,
        msg: `User logged in successfully`,
        user: {
          name: user.name,
          email: user.email,
        },
      });
    })
    .catch(err => {
      res.status(400).json({
        err: true,
        msg: `Invalid email or password`,
      });
    });
}

