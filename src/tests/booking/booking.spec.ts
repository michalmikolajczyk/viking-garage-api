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
  body: 'RIDE REQUEST - Honda Beat Fi\nOffer: localhost/offer/58,\nStart date: Thu Jan 11 2018 00:00:00 GMT+0100 (CET),\nEnd date: Sun Jan 21 2018 00:00:00 GMT+0100 (CET),\nEquipment: 1,\nPrice: 17 AUD / day,\nTotal: 187 AUD,\nRange: 11 days\nCurrency: AUD',
  type: 'ride',
  code: 'en',
  message: 'hey how are you?',
};

const bookingProneToFail = Object.assign({}, booking);
delete bookingProneToFail.type;

describe('booking/ tests', () => {
  it('should return error due the one empty field (type)', (done) => {
    chai.request(server)
      .post('/booking')
      .send(bookingProneToFail)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('err');
        res.body.should.be.deep.equal(error.missing);
        done();
      });
  });

  it('should return error because of wrong data type', (done) => {
    chai.request(server)
      .post('/booking')
      .send({
        ...bookingProneToFail,
        type: { wrong: 'type' },
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('err');
        res.body.should.be.deep.equal(error.validation);
        done();
      });
  });

  it('should create new booking successfully', (done) => {
    chai.request(server)
      .post('/booking')
      .send(booking)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.not.have.property('err');
        res.body.should.have.property('createdAt');
        res.body.should.have.property('updatedAt');
        res.body.should.have.property('emailSent');
        res.body.emailSent.should.be.equal(true);
        res.body.should.have.property('name');
        res.body.should.have.property('type');
        res.body.should.have.property('email');
        res.body.should.not.have.property('id');
        res.body.should.not.have.property('body');
        done();
      });
  });
});
