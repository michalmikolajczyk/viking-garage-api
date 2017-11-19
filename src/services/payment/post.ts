import {
  Request,
  Response,
  NextFunction,
} from 'express';
import debug from 'debug';
const log = debug('api:payment/del');
import db from '../../sequelize';
import * as err from '../error';

export default function post(req: Request, res: Response, next: NextFunction): any {

const {
  bookingId,
  token,
  amount,
  currency
} = req.body;

if (!bookingId || !token || !amount || !currency) return res.status(400);

const newPayment = {
  bookingId,
  token: JSON.stringify(token),
  amount,
  currency
}

return db['payment'].create(newPayment)
  .then(() => res.status(200).send({ msg: 'ok' }))
  .catch((err) => {
    log(err)
    return res.status(500).json({ err: 'There was an error processing your request' })
  })
}
