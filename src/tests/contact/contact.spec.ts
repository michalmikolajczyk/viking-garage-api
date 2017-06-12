process.env.NODE_ENV = 'test';
import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import server from '../../server';
const should = chai.should();
chai.use(chaiHttp);
import * as error from '../../services/error';

const contact = {
  name: 'Viking',
  email: 'viking.garage.app@gmail.com',
  body: 'start date: 1/12/2017 etc.',
  message: 'hey how are you?',
};

describe('contact/ tests', () => {
  it('should return error due the one empty field (type)', (done) => {
    chai.request(server)
      .post('/contact')
      .send(contact)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('err');
        res.body.should.be.deep.equal(error.missing);
        done();
      });
  });

  it('should return error because of wrong data type', (done) => {
    chai.request(server)
      .post('/contact')
      .send({
        ...contact,
        type: { wrong: 'type' },
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('err');
        res.body.should.be.deep.equal(error.validation);
        done();
      });
  });

  it('should create new contact instance successfully', (done) => {
    chai.request(server)
      .post('/contact')
      .send({
        ...contact,
        type: 'ride',
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.not.have.property('err');
        res.body.should.have.property('msg');
        res.body.msg.should.be.equal('Contact request saved');
        done();
      });
  });
});
