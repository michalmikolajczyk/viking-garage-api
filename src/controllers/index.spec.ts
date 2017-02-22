import 'mocha'
import * as chai from 'chai'
import server from './index'
import chaiHttp = require('chai-http')

chai.use(chaiHttp)
const expect = chai.expect

describe('Smoke test', function() {
  it('should return hello world', function() {
    return chai.request(server)
      .get('/')
      .end(function(err, res) {
        expect(res.status).to.equal(200)
        expect(res.body).to.be.string
        expect(res.body).to.equal('Hello world')
      })
  })
})
