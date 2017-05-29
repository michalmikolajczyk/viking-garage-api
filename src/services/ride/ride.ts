import {
  Request,
  Response,
  NextFunction,
} from 'express';
import db from '../../sequelize';
import { rideEmail } from '../../mailer';
import * as error from '../error';
import debug from 'debug';
const log = debug('api:ride');

export default function ride(req: Request, res: Response, next: NextFunction): any {
  const {
    name,
    email,
    offer,
    total,
    startDate,
    endDate,
    equipment,
  } = req.body;

  if (!name || !email || !offer || !total || !startDate || !endDate || !equipment) return res.status(400).json({ err: 'Please fill in all the fields.' });

  const newRide = {
    name,
    email,
    offer,
    total,
    startDate,
    endDate,
    equipment,
  };

  db['ride'].create(newRide)
    .then(user => rideEmail(newRide)
      .then(() => res.status(200).json({ msg: 'Booking ride successfully' }))
      .catch((err) => {
        log(`Unexpected error ${err}`);
        res.status(500).json(error.unexpected);
      }))
    .catch((err) => {
      log(`Unexpected error ${err}`);
      res.status(500).json(error.unexpected);
    });
}
