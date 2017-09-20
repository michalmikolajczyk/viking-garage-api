process.env.NODE_ENV = 'test';
import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { v1 } from 'uuid';
import server from '../../server';
import db from '../../sequelize';
const should = chai.should();
chai.use(chaiHttp);

describe('user/verify tests', () => {
  it('should return error because of wrong token', (done) => {
    chai.request(server)
      .post('/user/verify')
      .send({ token: v1() })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('err');
        res.body.err.should.equal(true);
        res.body.should.have.property('msg');
        res.body.msg.should.be.equal('User not authorized');
        done();
      });
  });

  it('should verified user successfully', () => {
    const email = 'viking.garage.app@gmail.com';
    return db['account'].findOne({ where: { email } })
      .then((account) => {
        chai.request(server)
          .post('/user/verify')
          .send({ token: account.token })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('err');
            res.body.err.should.equal(false);
            res.body.should.have.property('msg');
            return res.body.msg.should.be.equal('email verified successfully');
          });
        });
  });
});
