import {
  Request,
  Response,
  NextFunction,
} from 'express';
import debug from 'debug';
const log = debug('api:user/get');
import db from '../../sequelize';

export default function get(req: Request, res: Response, next: NextFunction): any {}
