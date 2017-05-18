import {
  Request,
  Response,
  NextFunction,
} from 'express';
import debug from 'debug';
const log = debug('api:user/put');
import db from '../../sequelize';

export default function put(req: Request, res: Response, next: NextFunction): any {}
