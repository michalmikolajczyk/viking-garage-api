import { authorize } from '../../helpers/passport';

export default function check(req: any, res: any, next: any): void {
  authorize(req, res, next)
    .then((user) => {
      res.status(200).json({
        err: false,
        msg: `User authorized succesfully`,
        user: {
          email: user.email,
          name: user.name,
        },
      });
    })
    .catch((err) => {
      res.status(401).json({
        err: true,
        msg: `User is not authorized`,
      });
    });
}
