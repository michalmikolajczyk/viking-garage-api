process.env.NODE_ENV = 'test';
import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import server from '../../server';
const should = chai.should();
chai.use(chaiHttp);
import * as error from '../../services/error';

const booking = {
  name: 'Viking',
  email: 'viking.garage.app@gmail.com',
  offer: 1,
  startDate: '2017-06-01T08:07:09.235Z',
  endDate: '2017-06-01T08:07:09.235Z',
  equipment: 1,
  price: 55,
  currency: 'PLN',
};

describe('ride/ride tests', () => {
  it('should return error due the one empty field (total)', (done) => {
    chai.request(server)
      .post('/ride')
      .send(booking)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('err');
        res.body.should.be.deep.equal(error.missing);
        done();
      });
  });

  it('should return error because of wrong data type', (done) => {
    chai.request(server)
      .post('/ride')
      .send({
        ...booking,
        total: 'wrong type',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('err');
        res.body.should.be.deep.equal(error.validation);
        done();
      });
  });

  it('should create new booking instance successfully', (done) => {
    chai.request(server)
      .post('/ride')
      .send({
        ...booking,
        total: 55,
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.not.have.property('err');
        res.body.should.have.property('msg');
        res.body.msg.should.be.equal('Booking ride successfully');
        done();
      });
  });
});
