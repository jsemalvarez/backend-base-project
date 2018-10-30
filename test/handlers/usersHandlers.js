
var request = require('supertest')
var expect = require('chai').expect
var server = require('../../server')
var UserModel = require('../../app/models/user')
var utils = require('../utils')

describe('User Handler', function() {
  before(function(done) {
    utils.cleanDB(function(){
      // Adding two intial examples
      UserModel.add({ username: 'pepe',password: '1234' }, function() {
        UserModel.add({ username: 'tito',password: '1234' }, function() {
          done()
        })
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
})
