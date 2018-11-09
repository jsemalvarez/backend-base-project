var request = require('supertest')
var expect = require('chai').expect
var server = require('../../server')
var ProductModel = require('../../app/models/product')
var utils = require('../utils')

describe('Product Handler', function() {
  beforeEach(function(done) {
    // Adding two intial examples
    var tablet = {
      name:'Tablet Xperia',
      price: 5600,
      last_price: 6000,
      stock: 10
    }
    ProductModel.add(tablet, function(err, res) {
      var auriculares = {
        name:'auriculares sony',
        price: 2500,
        last_price: 2650,
        stock: 10
      }
      ProductModel.add(auriculares, function(err, res) {
        done()
      })
    })
  })

  describe('GET /api/products', function () {
    it('returns a products list', function(done) {
      request(server).get('/api/products').end(function(err, res) {
        expect(res.status).to.eq(200)
        expect(res.body.length).to.eq(2)
        expect(res.body[0].name).to.eq('Tablet Xperia')
        expect(res.body[1].name).to.eq('auriculares sony')
        done()
      })
    })
  })
})