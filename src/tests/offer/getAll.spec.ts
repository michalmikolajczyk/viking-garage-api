process.env.NODE_ENV = 'test';
import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import server from '../../server';
import * as error from '../../services/error';
const should = chai.should();
chai.use(chaiHttp);

describe('/offer', () => {
  it('should returns default offers', (done) => {
    chai.request(server)
    .get('/offer')
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.have.property('offset');
      res.body.offset.should.be.equal(0);
      res.body.data.should.be.an('array');
      res.body.data.should.have.lengthOf(4);
      done();
    });
  });

  it('should returns offers type street', (done) => {
    chai.request(server)
    .get('/offer?type=street')
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.have.property('offset');
      res.body.offset.should.be.equal(0);
      res.body.data.should.be.an('array');
      res.body.data.should.have.lengthOf(1);
      res.body.data[0].should.have.property('subtype');
      res.body.data[0].subtype.should.be.equal('street');
      done();
    });
  });

  it('should returns offers type street', (done) => {
    chai.request(server)
    .get('/offer?type=street')
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.have.property('offset');
      res.body.offset.should.be.equal(0);
      res.body.data.should.be.an('array');
      res.body.data.should.have.lengthOf(1);
      res.body.data[0].should.have.property('subtype');
      res.body.data[0].subtype.should.be.equal('street');
      done();
    });
  });

  it('should returns offers in close distance', (done) => {
    const dist = 10000;
    chai.request(server)
    .get(`/offer?dist=${dist}&lat=52.1851681&lng=21.0470948`)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.have.property('offset');
      res.body.offset.should.be.equal(0);
      res.body.data.should.be.an('array');
      res.body.data.should.have.lengthOf(2);
      res.body.data[0].distance.should.be.below(dist);
      res.body.data[1].distance.should.be.below(dist);
      done();
    });
  });

  it('should returns sorted offers', (done) => {
    chai.request(server)
    .get(`/offer?lat=52.1851681&lng=21.0470948`)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.have.property('offset');
      res.body.offset.should.be.equal(0);
      res.body.data.should.be.an('array');
      res.body.data.should.have.lengthOf(4);
      res.body.data[0].distance.should.be.below(res.body.data[1].distance);
      res.body.data[1].distance.should.be.below(res.body.data[2].distance);
      res.body.data[2].distance.should.be.below(res.body.data[3].distance);
      done();
    });
  });

  it('should returns one offer (offset = 4)', (done) => {
    chai.request(server)
    .get('/offer?offset=4')
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.have.property('offset');
      res.body.offset.should.be.equal(4);
      res.body.data.should.be.an('array');
      res.body.data.should.have.lengthOf(1);
      done();
    });
  });
});
