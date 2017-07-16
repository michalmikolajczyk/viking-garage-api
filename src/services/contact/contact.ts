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
const log = debug('api:contact');

export default function contact(req: Request, res: Response, next: NextFunction): any {
  const {
    name,
    email,
    type,
    body,
    message,
    code,
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
    .then(user => contactEmail({ ...newContact, code })
      .then(() => res.status(200).json({ msg: 'Contact request saved' }))
      .catch((err) => {
        log(`Connection to the smtp service failed, email not send, ${err}`);
        res.status(500).json(error.unexpected);
      }))
    .catch(Sequelize.ValidationError, (err) => {
      log(`E-mail validation error, contact not saved & email not send, ${err}`);
      res.status(400).json(error.validation);
    })
    .catch((err) => {
      log(`Contact saving error (database), contact not saved & email not send, ${err}`);
      res.status(500).json(error.unexpected);
    });
}
