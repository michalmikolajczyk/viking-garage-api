import {
    Request,
    Response,
    NextFunction,
  } from 'express';
import debug from 'debug';
const log = debug('api:offer/del');
import db from '../../sequelize';
import * as err from '../error';
export default function del(req: Request, res: Response, next: NextFunction): any {
  const id = req.params.id
  if (isNaN(id)) return res.status(400).json(err.invalid);
  
  return db['booking'].destroy({ where: { id } })
    .then(() => res.json('ok'))
    .catch(err => log(`Unexpected error ${err}`) && res.status(500).json(err.unexpected))
}
