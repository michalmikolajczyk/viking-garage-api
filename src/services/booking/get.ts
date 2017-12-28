import {
    Request,
    Response,
    NextFunction,
  } from 'express';
import debug from 'debug';
const log = debug('api:offer/del');
import db from '../../sequelize';
import * as err from '../error';
export default function get(req: Request, res: Response, next: NextFunction): any {
  const id = req.params.id
  if (isNaN(id)) return res.status(400).json(err.invalid);
  
  return db['booking'].find({
    where: { id },
    // include: [
    //   { model: db['offerer'] },
    //   { all: true, through: { attributes: [] } },
      // { model: db['accessorie'], through: { attributes: [] } },
      // { model: db['helmet'], through: { attributes: [] } },
      // { model: db['motorcycle'], through: { attributes: [] } },
      // { model: db['protection'], through: { attributes: [] } },
      // { model: db['service'], through: { attributes: [] } },
    // ],
  })
  .then((offer) => {
    if (!offer) return res.status(400).json(err.notexists);
    return res.json(offer);
  })
  .catch(err => log(`Unexpected error ${err}`) && res.status(500).json(err.unexpected))
}
