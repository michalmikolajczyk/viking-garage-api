process.env.NODE_ENV = 'test';
import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import server from '../../server';
import cleandb from '../../sequelize/cleandb';
import { User } from '../../sequelize';
const should = chai.should();
chai.use(chaiHttp);

describe('user/reset tests', () => {

  before(cleandb);

  it('should return error because of wrong email', (done) => {
    chai.request(server)
      .post('/user/reset')
      .send({
        email: 'wrong.email@gmail.com',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('err');
        res.body.err.should.equal(true);
        res.body.should.have.property('msg');
        res.body.msg.should.be.equal('User with provided email does not exists');
        done();
      });
  });

  /**
   * if we need this inside function (for example for timeout()) we can
   * use function expression instead of arrow function, but we have to
   * use this explicit (it's a 'no-function-expression' rule from linter)
   */

  it('should send email with reset link successfully', function (done) {
    this.timeout(10000);
    chai.request(server)
      .post('/user/reset')
      .send({
        email: 'viking.garage.app@gmail.com',
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('err');
        res.body.err.should.equal(false);
        res.body.should.have.property('msg');
        res.body.msg.should.be.equal('Email with reset link sent successfully');
        done();
      });
  });
});
