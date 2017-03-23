import {
  Request,
  Response,
  NextFunction,
} from 'express';
import debug from 'debug';
const log = debug('api:offer/post');
import db from '../../sequelize';

export default function post(req: Request, res: Response, next: NextFunction): any {}
