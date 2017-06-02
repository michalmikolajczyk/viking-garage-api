import {
  Request,
  Response,
  NextFunction,
} from 'express';
import * as Sequelize from 'sequelize';
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
    startDate,
    endDate,
    equipment,
    price,
    total,
    currency,
  } = req.body;

  if (!name || !email || !offer || !startDate || !endDate || !equipment || !price || !total || !currency) return res.status(400).json(error.missing);

  const newRide = {
    name,
    email,
    offer,
    startDate,
    endDate,
    equipment,
    price,
    total,
    currency,
  };

  db['ride'].create(newRide)
    .then(user => rideEmail(newRide)
      .then(() => res.status(200).json({ msg: 'Booking ride successfully' }))
      .catch((err) => {
        log(`Unexpected error ${err}`);
        res.status(500).json(error.unexpected);
      }))
    .catch(Sequelize.ValidationError, (err) => {
      log(`Validation error ${err}`);
      res.status(400).json(error.validation);
    })
    .catch((err) => {
      log(`Unexpected error ${err}`);
      res.status(500).json(error.unexpected);
    });
}
