process.env.NODE_ENV = 'test';
import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import server from '../../server';
import { login, setCookie } from '../../helpers/passport';
import * as error from '../../services/error';
const should = chai.should();
chai.use(chaiHttp);

// const email = 'janek@vikinggarage.com';
const email = 'viking.garage.app+999@gmail.com';
const pass = 'new_pass';
const userDefault = {
  id: 4,
  accountId: 4,
  email,
  birthday: null,
  firstname: null,
  lastname: null,
  phone: null,
  emergency: null,
  city: null,
  country: null,
  brief: null,
  image: null,
};

describe('user/get tests', () => {
  it('should return error because user is not logged in', (done) => {
    chai.request(server)
    .get('/user')
    .end((err, res) => {
      res.should.have.status(401);
      res.body.should.be.deep.equal({});
      done();
    });
  });

  it('should return all user data', (done) => {
    login(email, pass).then(({ token, account }) => {
      chai.request(server)
      .get('/user')
      .set('Cookie', 'access_token:' + token)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('data');
        const createdAt = res.body.data.createdAt
        const updatedAt = res.body.data.updatedAt
        delete res.body.data.createdAt
        delete res.body.data.updatedAt
        createdAt.should.have.lengthOf(24)
        updatedAt.should.have.lengthOf(24)
        res.body.data.should.be.deep.equal(userDefault);
        done()
      });
    });
  });
});
