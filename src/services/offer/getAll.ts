import {
  Request,
  Response,
  NextFunction,
} from 'express';
import db from '../../sequelize';
import * as err from '../error';

export default function getAll(req: Request, res: Response, next: NextFunction): any {
  db['offer'].findAll()
    .then((offers) => {
      if (!offers) return res.status(400).json(err.notExists);
      res.json(offers);
    })
    .catch(err => {
      console.log(`Unexpected error ${err}`);
      res.status(500).json(err.unexpected);
    });
}
