import {
  Request,
  Response,
  NextFunction,
} from 'express';
import debug from 'debug';
const log = debug('api:offer/del');
import * as err from '../error';
import fetch from 'node-fetch';

export default function post(req: Request, res: Response, next: NextFunction): any {
  const {
    email
  } = req.body;
  const apiKey = process.env.MAILCHIMP_API_KEY;

  if (!email) return res.status(400)
    .json(err.missing);

  if (typeof email !== 'string') return res.status(400).json(err.validation);

  const url = 'https://us17.api.mailchimp.com/3.0/lists/560e2b2063/members/';
  const jsonData = {
    email_address: email,
    status: 'pending',
  };
  const creds = 'whatever:' + apiKey;
  const base64Creds = new Buffer('whatever:' + apiKey).toString('base64');

  return fetch(url, {
    method: 'post',
    headers: {
      Authorization: 'Basic ' + base64Creds
    },
    body: JSON.stringify(jsonData),
  }).then(res => res.json())
    .then((response) => {
      log(response);
      return res.status(200).json(response);
    }).catch((err) => {
      log(err);
      return res.status(400).json(err);
    });
}
