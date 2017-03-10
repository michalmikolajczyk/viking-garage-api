process.env.NODE_ENV = 'test';
import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import server from '../../server';
import { createUsers } from '../../sequelize/mockups';
const should = chai.should();
chai.use(chaiHttp);

describe('user/login tests', () => {

  before(createUsers);

  it('should return error because of wrong email', (done) => {
    chai.request(server)
    .post('/user/login')
    .send({
      email: 'wrong.email@gmail.com',
      password: 'secret',
    })
    .end((err, res) => {
      res.should.have.status(400);
      res.body.should.have.property('err');
      res.body.err.should.equal(true);
      res.body.should.have.property('msg');
      res.body.msg.should.be.equal('Invalid email or password');
      done();
    });
  });

  it('should return error because of wrong password', (done) => {
    chai.request(server)
    .post('/user/login')
    .send({
      email: 'viking.garage.app@gmail.com',
      password: 'wrong_password',
    })
    .end((err, res) => {
      res.should.have.status(400);
      res.body.should.have.property('err');
      res.body.err.should.equal(true);
      res.body.should.have.property('msg');
      res.body.msg.should.be.equal('Invalid email or password');
      done();
    });
  });

  it('should logged in user successfully', (done) => {
    chai.request(server)
    .post('/user/login')
    .send({
      email: 'viking.garage.app@gmail.com',
      password: 'secret',
    })
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.have.property('err');
      res.body.err.should.equal(false);
      res.body.should.have.property('msg');
      res.body.msg.should.be.equal('User logged in successfully');
      done();
    });
  });
});
