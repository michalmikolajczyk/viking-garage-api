process.env.NODE_ENV = 'test'
import * as mocha from 'mocha'
import * as chai from 'chai'
import chaiHttp = require('chai-http')
import { v1 } from 'uuid'
import server from '../../server'
import cleandb from '../../sequelize/cleandb'
import { User } from '../../sequelize'
const should = chai.should()
chai.use(chaiHttp)

describe('user/verify tests', function() {

  before(function() {
    return cleandb()
  })

  it('should return error because of wrong token', function(done) {
    chai.request(server)
    .post('/user/verify')
    .send({ token: v1() })
    .end(function(err, res) {
      res.should.have.status(400)
      res.should.be.json
      res.body.should.have.property('err')
      res.body.err.should.equal(true)
      res.body.should.have.property('msg')
      res.body.msg.should.be.equal('Token expired')
      done()
    })
  })

  it('should changed password successfully', function(done) {
    let email = 'viking.garage.app@gmail.com'
    User.findOne({where: { email }})
    .then(user => {
      chai.request(server)
      .post('/user/verify')
      .send({ token: user.token })
      .end(function(err, res) {
        res.should.have.status(200)
        res.should.be.json
        res.body.should.have.property('err')
        res.body.err.should.equal(false)
        res.body.should.have.property('msg')
        res.body.msg.should.be.equal('User verified successfully')
        done()
      })
    })
  })
})
