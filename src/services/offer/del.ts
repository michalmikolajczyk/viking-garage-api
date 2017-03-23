import {
  Request,
  Response,
  NextFunction,
} from 'express';
import debug from 'debug';
const log = debug('api:offer/del');
import db from '../../sequelize';

export default function del(req: Request, res: Response, next: NextFunction): any {}
