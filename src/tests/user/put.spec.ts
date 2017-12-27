process.env.NODE_ENV = 'test';
import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import server from '../../server';
import { login, setCookie } from '../../helpers/passport';
import * as error from '../../services/error';
const should = chai.should();
chai.use(chaiHttp);

const email = 'viking.garage.app+999@gmail.com';
const pass = 'new_pass';
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
      res.body.should.be.deep.equal({});
      done();
    });
  });

  it('should update user in db', (done) => {
    login(email, pass).then(({ token, user }) => {
      chai.request(server)
      .put('/user')
      .set('Cookie', 'access_token:' + token)
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
