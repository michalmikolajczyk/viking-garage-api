import {
  Request,
  Response,
  NextFunction,
} from 'express';
import db from '../../sequelize';
import * as err from '../error';
import debug from 'debug';
const log = debug('api:offer/getAll');

export default function getAll(req: Request, res: Response, next: NextFunction): any {
  let countryWhere;
  let distanceOrd;
  let distanceAttr;
  let distanceFunc;
  let distanceWhere;
  let order = ['manualorder'];
  let subtypeWh;

  const limit = parseInt(process.env.VG_LIMIT, 10) || 8;
  const offset = parseInt(req.query.offset, 10) || 0;
  const distMax = 10000000;

  const {
    country,
    lat,
    lng,
    dist,
    type,
  } = req.query;

  // create subtype filter
  if (typeof type === 'string' && type.length > 0) {
    subtypeWh = { subtype: { $in: type.split(',') } };
  }

  if (typeof country === 'string' && country.length > 0) {
    countryWhere = { country: { $in: country.split(',') } };
  }

  // create distance filter
  if (typeof lat !== 'undefined' || typeof lng !== 'undefined') {
    distanceFunc = db['sequelize'].fn(
      'ST_Distance',
      db['sequelize'].col('coord'),
      db['sequelize'].fn('ST_SetSRID', db['sequelize'].fn('ST_Point', lat, lng), 4326),
    );
    distanceOrd = { order: [distanceFunc] };
    distanceAttr = { include: [[distanceFunc, 'distance']] };
    distanceWhere = { $and: db['sequelize'].where(distanceFunc, '<=', dist || distMax) };
    order = [distanceFunc, 'manualorder'];
  }

  db['offer'].findAll({
    limit,
    offset,
    order,
    attributes: {
      ...distanceAttr,
      exclude: ['offererId', 'createdAt', 'updatedAt'],
    },
    where: {
      ...countryWhere,
      ...subtypeWh,
      ...distanceWhere,
    },
  })
    .then((data) => {
      if (!data) return res.status(400).json(err.notexists);
      if (data.length === 0 && offset === 0) {
        return db['offer'].findAll({ limit }).then((data) => {
          return res.json({
            data,
            offset,
            empty: true,
          });
        });
      }
      res.json({
        data,
        offset,
      });
    })
    .catch((err) => {
      log(`Unexpected error ${err}`);
      res.status(500).json(err.unexpected);
    });
}
