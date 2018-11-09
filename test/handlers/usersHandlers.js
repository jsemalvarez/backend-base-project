
var request = require('supertest')
var expect = require('chai').expect
var server = require('../../server')
var UserModel = require('../../app/models/user')
var UserModelTest = require('../../app/handlers/usersHandler')
var utils = require('../utils')

describe('User Handler', function() {
  beforeEach(function(done) {
    // Adding two i|ntial examples
    UserModel.add({ username: 'pepe',password: '1234' }, function() {
      UserModel.add({ username: 'tito',password: '1234' }, function() {
        done()
      })
    })
  })

  describe('GET /api/users', function () {
    it('returns an users list', function(done) {
      request(server).get('/api/users').end(function(err, res) {
        expect(res.status).to.eq(200)
        expect(res.body.length).to.eq(2)
        expect(res.body[0].username).to.eq('pepe')
        expect(res.body[1].username).to.eq('tito')
        done()
      })
      
    })
  })

  describe('POST /api/users', function () {
    it('add a new user', function(done) {
      request(server).post('/api/users').send({
        username: " ", password: "1234"
      }).end(function(err, res) {
        expect(res.status).to.eq(200)
        done()
      })
    })
  })
})
