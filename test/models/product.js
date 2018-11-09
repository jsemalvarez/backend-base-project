var expect = require('chai').expect
var ProductModel = require('../../app/models/product')
var utils = require('../utils')

describe('Product Model', function() {
  beforeEach(function(done) {
    // Adding two intial examples
    var tablet = {
      name:'Tablet Xperia',
      price: 5600,
      last_price: 6000,
      stock: 10
    }
    ProductModel.add(tablet, function() {
      var auriculares = {
        name:'auriculares sony',
        price: 2500,
        last_price: 2650,
        stock: 10
      }
      ProductModel.add(auriculares, function() {
        done()
      })
    })
  })

  describe('#getAll', function () {
    it('returns all the users', function(done) {
      ProductModel.getAll(function(err, res) {
        expect(err).to.not.exist;
        expect(res.length).to.eq(2)
        expect(res[0].name).to.eq('Tablet Xperia')
        expect(res[1].name).to.eq('auriculares sony')
        done()
      })
    })
  })

  describe('#add', function () {
    it('adds a new product', function(done) {
      ProductModel.getAll(function(err, res) {
        var qty = res.length;
        ProductModel.add({ name: 'tato', price: '1234', last_price: '1000', stock: '2' }, function(err, res) {
          expect(err).to.not.exist;
          expect(res.insertId).to.exist;
        
          ProductModel.getAll(function(err, res) {
            expect(res.length).to.equal(qty + 1);
            done()
          });
        })
      });      
    })

  })// end describe '#add'

})// end describe 'Usuario Model'