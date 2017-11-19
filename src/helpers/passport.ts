import {
  Express,
  Request,
  Response,
  NextFunction,
} from 'express';
const bcrypt = require('bcrypt');
import * as passport from 'passport';
import * as jwt from 'jsonwebtoken';
import { Strategy, ExtractJwt } from 'passport-jwt';
import db from '../sequelize';

const cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['access_token'];
  }
  return token;
};

export function config(app: Express): void {
  app.use(passport.initialize());

  passport.use(new Strategy({
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: cookieExtractor,
  }, (payload, next) => db['account'].findOne({ where: { id: payload.id }, include: [db['user']] })
    .then(account => next(null, account))
    .catch(err => next(null, false, { message: err }))
  ));
}

export function authenticate(req: Request, res: Response, next: NextFunction): Promise<any> {
  return new Promise((resolve, reject) => {
    return passport.authenticate(
      'jwt',
      { session: process.env.JWT_SESSION === 'true' },
      (err, user, info) => {
        if (err || !user) return reject(info);
        return resolve(user);
      },
    )(req, res, next);
  });
}

export function login(email: string, password: string): Promise<any> {
  return db['account']
    .findOne({ where: { email }, include: [db['user']] })
    .then((account) => {
      return bcrypt.compare(password, account.password)
        .then((result) => {
          if (!result) throw new Error()
          const payload = { id: account.id };
          const token = jwt.sign(payload, process.env.JWT_SECRET);
          return { token, account };
        })
      })
    .catch(err => new Error('User with provided email and password not exists'))
}


export function loginNoHash(email: string): Promise<any> {
  return db['account']
    .findOne({ where: { email }, include: [db['user']] })
    .then((account) => {
      const payload = { id: account.id };
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      return { token, account };
    })
    .catch(err => new Error('User with provided email and password not exists'))
}

export function setCookie(res: Response, token: Object) {
  return res.cookie('access_token', token, { maxAge: 86400000, httpOnly: true, secure: true })
}

