import {
    Request,
    Response,
    NextFunction,
  } from 'express';
import debug from 'debug';
const log = debug('api:payment/del');
import db from '../../sequelize';
import * as err from '../error';
export default function get(req: Request, res: Response, next: NextFunction): any {
  const id = req.params.id
  if (isNaN(id)) return res.status(400).json(err.invalid);
  
  return db['payment'].find({
    where: { id }
  })
  .then((payment) => {
    if (!payment) return res.status(400).json(err.notexists);
    return res.json(payment);
  })
  .catch(err => log(`Unexpected error ${err}`) && res.status(500).json(err.unexpected))
}
