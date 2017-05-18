process.env.NODE_ENV = 'test';
import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import server from '../../server';
const should = chai.should();
chai.use(chaiHttp);

describe('user/login tests', () => {
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
      res.body.err.should.be.equal('Invalid email or password');
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
      res.body.err.should.be.equal('Invalid email or password');
      done();
    });
  });

  it('should logged in user successfully', (done) => {
    chai.request(server)
    .post('/user/login')
    .send({
      email: 'viking.garage.app@gmail.com',
      password: 'new_pass',
    })
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.not.have.property('err');
      res.body.should.have.property('data');
      res.body.data.should.have.property('user');
      res.body.data.user.should.have.property('email');
      done();
    });
  });
});
