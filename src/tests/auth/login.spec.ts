process.env.NODE_ENV = 'test'
import * as mocha from 'mocha'
import * as chai from 'chai'
import chaiHttp = require('chai-http')
import server from '../../server'
import cleandb from '../../sequelize/cleandb'
chai.use(chaiHttp)
const should = chai.should()

describe('user/login tests', function() {

  before(function() {
    return cleandb()
  })

  it('should return error because of wrong email', function(done) {
    chai.request(server)
    .post('/user/login')
    .send({
      email: 'wrong.email@gmail.com',
      password: 'secret',
    })
    .end(function(err, res) {
      res.should.have.status(400)
      res.should.be.json
      res.body.should.have.property('err')
      res.body.err.should.equal(true)
      res.body.should.have.property('msg')
      res.body.msg.should.be.equal('Invalid email or password')
      done()
    })
  })

  it('should return error because of wrong password', function(done) {
    chai.request(server)
    .post('/user/login')
    .send({
      email: 'viking.garage.app@gmail.com',
      password: 'wrong_password',
    })
    .end(function(err, res) {
      res.should.have.status(400)
      res.should.be.json
      res.body.should.have.property('err')
      res.body.err.should.equal(true)
      res.body.should.have.property('msg')
      res.body.msg.should.be.equal('Invalid email or password')
      done()
    })
  })

  it('should logged in user successfully', function(done) {
    chai.request(server)
    .post('/user/login')
    .send({
      email: 'viking.garage.app@gmail.com',
      password: 'secret',
    })
    .end(function(err, res) {
      res.should.have.status(200)
      res.should.be.json
      res.body.should.have.property('err')
      res.body.err.should.equal(false)
      res.body.should.have.property('msg')
      res.body.msg.should.be.equal('User logged in successfully')
      done()
    })
  })
})
