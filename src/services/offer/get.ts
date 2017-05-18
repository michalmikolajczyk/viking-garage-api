import {
  Request,
  Response,
  NextFunction,
} from 'express';
import * as err from '../error';
import db from '../../sequelize';
import debug from 'debug';
const log = debug('api:offer/get');

export default function get(req: Request, res: Response, next: NextFunction): any {
  const idStr = req.path.replace('/offer/', '');
  const id = parseInt(idStr, 10);
  if (isNaN(id)) return res.status(400).json(err.invalid);

  db['offer'].find({
    where: { id },
    include: [
      { model: db['offerer'] },
      { all: true, through: { attributes: [] } },
      // { model: db['accessorie'], through: { attributes: [] } },
      // { model: db['helmet'], through: { attributes: [] } },
      // { model: db['motorcycle'], through: { attributes: [] } },
      // { model: db['protection'], through: { attributes: [] } },
      // { model: db['service'], through: { attributes: [] } },
    ],
  })
    .then((offer) => {
      if (!offer) return res.status(400).json(err.notexists);
      res.json(offer);
    })
    .catch((err) => {
      log(`Unexpected error ${err}`);
      res.status(500).json(err.unexpected);
    });
}
