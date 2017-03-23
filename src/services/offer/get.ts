import {
  Request,
  Response,
  NextFunction,
} from 'express';
import db from '../../sequelize';

export default function get(req: Request, res: Response, next: NextFunction): any {
  res.send('ok');
}
