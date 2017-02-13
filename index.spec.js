var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./index');
var should = chai.should();
chai.use(chaiHttp)

describe('Smoke test', function() {
  it('should return hello world', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res) {
        res.should.have.status(200)
        res.text.should.be.a('string')
        res.text.should.equal('Hello world')
        done();
      });
  });
})
