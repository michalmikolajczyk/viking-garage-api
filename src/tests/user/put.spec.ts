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
const newUser = {
  email,
  firstname: 'Piotr',
  lastname: 'Wojciechowski',
  birthday: '1981-02-11T23:00:00.000Z',

  phone: '693231123',
  emergency: null,
  city: null,
  country: null,
  brief: null,

  image: null,
};

describe('user/put tests', () => {
  it('should return error because user is not logged in', (done) => {
    chai.request(server)
    .put('/user')
    .send(newUser)
    .end((err, res) => {
      res.should.have.status(401);
      res.body.should.have.property('err');
      res.body.should.be.deep.equal(error.unauthorized);
      done();
    });
  });

  it('should update user in db', (done) => {
    login(email, pass).then(({ token, user }) => {
      chai.request(server)
      .put('/user')
      .set('Authorization', `JWT ${token}`)
      .send(newUser)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('msg');
        res.body.msg.should.be.equal('ok');
        done();
      });
    });
  });
});
