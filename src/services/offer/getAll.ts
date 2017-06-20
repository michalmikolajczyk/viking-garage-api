import {
  Request,
  Response,
  NextFunction,
} from 'express';
import db from '../../sequelize';
import * as err from '../error';
import debug from 'debug';
const log = debug('api:offer/getAll');

const query = (point, dist) =>
  `SELECT * FROM offers WHERE ST_DWithin(coord, ST_SetSRID(ST_Point(${point[0]}, ${point[1]}), 4326), ${dist});`;

export default function getAll(req: Request, res: Response, next: NextFunction): any {
  const page = parseInt(req.query.page) || 0;
  const lat = req.query.lat || 52.237684;
  const lng = req.query.lng || 21.030086;
  const dist = req.query.dist || 1000000000;

  db['sequelize'].query(query([lat, lng], dist), { type: db['sequelize'].QueryTypes.SELECT })
    .then((offers) => {
      if (!offers) return res.status(400).json(err.notexists);
      const pages = offers.slice(page * 4, (page + 1) * 4);
      res.json(pages);
    })
    .catch((err) => {
      log(`Unexpected error ${err}`);
      res.status(500).json(err.unexpected);
    });
}
