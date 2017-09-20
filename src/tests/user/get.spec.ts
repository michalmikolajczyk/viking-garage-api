process.env.NODE_ENV = 'test';
import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import server from '../../server';
import { login } from '../../helpers/passport';
import * as error from '../../services/error';
const should = chai.should();
chai.use(chaiHttp);

const email = 'janek@vikinggarage.com';
const pass = 'secret';
const userDefault = {
  id: 2,
  accountId: 2,
  email,
  firstname: 'Jan',
  lastname: 'Horubała',
  birthday: '1981-01-11T23:00:00.000Z',
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
      res.body.should.have.property('err');
      res.body.should.be.deep.equal(error.unauthorized);
      done();
    });
  });

  it('should return all user data', (done) => {
    login(email, pass).then(({ token, user }) => {
      chai.request(server)
      .get('/user')
      .set('Authorization', `JWT ${token}`)
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
