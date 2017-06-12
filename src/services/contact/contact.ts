import {
  Request,
  Response,
  NextFunction,
} from 'express';
import * as Sequelize from 'sequelize';
import db from '../../sequelize';
import { contactEmail } from '../../mailer';
import * as error from '../error';
import debug from 'debug';
const log = debug('api:ride');

export default function contact(req: Request, res: Response, next: NextFunction): any {
  const {
    name,
    email,
    type,
    body,
    message,
  } = req.body;

  if (!name || !email || !type) return res.status(400).json(error.missing);

  const newContact = {
    name,
    email,
    type,
    body,
    message,
  };

  db['contact'].create(newContact)
    .then(user => contactEmail(newContact)
      .then(() => res.status(200).json({ msg: 'Contact request saved' }))
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
