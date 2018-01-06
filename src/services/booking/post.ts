import {
    Request,
    Response,
    NextFunction,
  } from 'express';
import debug from 'debug';
import { contactEmail } from '../../mailer';
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
		.json(err.missing);

	if (typeof type !== 'string') return res.status(400).json(err.validation);

  const newBooking = {
    name,
    email,
		type,
		body,
		message
	};
	
	let emailSent = false;
	let bookingFromEmail;

	return db['booking'].create(newBooking)
		.then((booking) => {
			bookingFromEmail = Object.assign({}, booking.dataValues);
			delete bookingFromEmail.id;
			delete bookingFromEmail.body;
		})
		.then(() => contactEmail({ ...newBooking, code: 'en' }))
		.then(() => emailSent = true)
		// .then(booking => db['payment'].create({ bookingId: booking.id }))
		// .then(payment => db['booking'].findOne({ where: { id: payment.bookingId } }))
		.catch(err => log(err))
		.then(() =>  Object.assign({ emailSent }, bookingFromEmail))
		.then(booking => res.status(200).send(booking))
		.catch((err) => {
			log(err)
			return res.status(500).json({ err: 'There was an error processing your request' })
		})
}
