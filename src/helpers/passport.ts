import {
  Express,
  Request,
  Response,
  NextFunction,
} from 'express';
import * as passport from 'passport';
import * as jwt from 'jsonwebtoken';
import conf from '../config';
import { Strategy, ExtractJwt } from 'passport-jwt';
import db from '../sequelize';

export function config(app: Express): void {
  app.use(passport.initialize());

  passport.use(new Strategy(
    {
      secretOrKey: conf.jwt.secret,
      jwtFromRequest: ExtractJwt.fromAuthHeader(),
    },
    (payload, next) => {
      db['user'].findOne({ where: { id: payload.id } })
      .then((user) => {
        if (user) return next(null, user);
        next(null, false);
      })
      .catch(err => next(null, false, { message: err }));
    },
  ));
}

export function authenticate(req: Request, res: Response, next: NextFunction): Promise<any> {
  return new Promise((resolve, reject) => {
    passport.authenticate(
      'jwt',
      { session: conf.jwt.session },
      (err, user, info) => {
        if (err || !user) return reject(info);
        resolve(user);
      },
    )(req, res, next);
  });
}

export function login(email: string, password: string): Promise<any> {
  return db['user']
    .findOne({ where: { email, password } })
    .then((user) => {
      if (!user) {
        throw new Error('User with provided email and password not exists');
      }
      const payload = { id: user.dataValues.id };
      const token = jwt.sign(payload, conf.jwt.secret);
      return { token, user: user.dataValues };
    });
}
