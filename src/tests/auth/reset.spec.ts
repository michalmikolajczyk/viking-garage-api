import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import server from '../../server';
const should = chai.should();
chai.use(chaiHttp);

describe('user/reset tests', () => {
  it('should return 200 for wrong email', (done) => {
    chai.request(server)
      .post('/user/reset')
      .send({
        email: 'wrong.email@gmail.com',
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('err');
        res.body.err.should.equal(true);
        res.body.should.have.property('msg');
        res.body.msg.should.be.equal('Please check your e-mail inbox for instructions');
        done();
      });
  });

  it('should send email with reset link successfully', (done) => {
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
        res.body.msg.should.be.equal('Please check your e-mail inbox for instructions');
        done();
      });
  });
});
