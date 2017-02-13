var chai = require('chai')
var chaiHttp = require('chai-http')
var server = require('../index')
var cleandb = require('../utils/cleandb')
var should = chai.should()

chai.use(chaiHttp)

describe('Auth signup tests', function() {

  beforeEach(function() {
    return cleandb()
  })

  it('should return 401 status on test if user logged in', function(done) {
    chai.request(server)
    .get('/auth/test')
    .end(function(err, res) {
      res.should.have.status(401)
      done();
    })
  })

  it('should return error due the empty fields', function(done) {
    chai.request(server)
    .post('/auth/signup')
    .send({
      name: 'Viking',
      email: 'viking@garage.com',
      password1: 'secret',
      password2: 'secret',
    })
    .end(function(err, res) {
      res.should.have.status(400)
      res.should.be.json
      res.body.error.should.equal(true)
      done()
    })
  })

  it('should return error 400 due the different passwords', function(done) {
    chai.request(server)
    .post('/auth/signup')
    .send({
      name: 'Viking',
      email: 'viking@garage.com',
      birthday: new Date(),
      password1: 'secret1',
      password2: 'secret2',
    })
    .end(function(err, res) {
      res.should.have.status(400)
      res.should.be.json
      res.body.error.should.equal(true)
      done()
    })
  })

  it('should return error 409 because of user with the same email in database', function(done) {
    chai.request(server)
    .post('/auth/signup')
    .send({
      name: 'Viking',
      email: 'viking@garage.com',
      birthday: new Date(),
      password1: 'secret',
      password2: 'secret',
    })
    .end(function(err, res) {
      res.should.have.status(409)
      res.should.be.json
      res.body.error.should.equal(true)
      done()
    })
  })

  it('should create new user', function(done) {
    chai.request(server)
    .post('/auth/signup')
    .send({
      name: 'Viking',
      email: 'viking.garage@garage.com',
      birthday: new Date(),
      password1: 'secret',
      password2: 'secret',
    })
    .end(function(err, res) {
      res.should.have.status(200)
      done()
    })
  })

})
