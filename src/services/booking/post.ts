import {
    Request,
    Response,
    NextFunction,
  } from 'express';
import debug from 'debug';
const log = debug('api:offer/del');
import db from '../../sequelize';
import * as err from '../error';

export default function post(req: Request, res: Response, next: NextFunction): any {

	const {
		name,
		email,
		type,
		body,
		message
  } = req.body;

	if (!name || !email || !type || !body) return res.status(400)
		.json({ err: 'Please fill in all the fields.' });

  const newBooking = {
    name,
    email,
		type,
		body,
		message
	}
	
	return db['booking'].create(newBooking)
		.then(booking => db['payment'].create({ bookingId: booking.id }))
		// .then(payment => db['booking'].findOne({ where: { id: payment.bookingId } }))
		.then(() => res.status(200).json({ msg: 'ok' }))
		.catch((err) => {
			log(err)
			return res.status(500).json({ err: 'There was an error processing your request' })
		})
}
