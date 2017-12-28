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
  if (req && req.cookies && req.cookies['access_token']) {
    token = req.cookies['access_token'];
  } else if (req && req.headers && req.headers.cookie) {
    token = req.headers.cookie.split(':')[1];
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

