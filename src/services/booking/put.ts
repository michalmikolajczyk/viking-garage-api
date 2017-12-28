import {
    Request,
    Response,
    NextFunction,
  } from 'express';
import debug from 'debug';
const log = debug('api:offer/del');
import db from '../../sequelize';
import * as err from '../error';
import * as _ from 'lodash/fp';
export default function get(req: Request, res: Response, next: NextFunction): any {
  const id = req.params.id
  if (isNaN(id)) return res.status(400).json(err.invalid);

  const updatedBooking = _.flow(
    _.pick(['name', 'email', 'type', 'body', 'message']),
    _.pickBy()
  )(req.body);

  // check the above object
  
  return db['booking'].update(updatedBooking, {
    where: { id }
  })
  .then((offer) => {
      if (!offer) return res.status(400).json(err.notexists);
      return res.json(offer);
  })
  .catch(err => log(`Unexpected error ${err}`) && res.status(500).json(err.unexpected))
}
