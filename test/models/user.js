var expect = require('chai').expect
var UserModel = require('../../app/models/user')
var utils = require('../utils')

describe('Usuario Model', function() {
  beforeEach(function(done) {
    // Adding two intial examples
    UserModel.add({ username: 'pepe',password: '1234' }, function() {
      UserModel.add({ username: 'tito',password: '1234' }, function() {
        done()
      })
    })
  })

  describe('#getAll', function () {
    it('returns all the users', function(done) {
      UserModel.getAll(function(err, res) {
        expect(err).to.not.exist;
        expect(res.length).to.eq(2)
        expect(res[0].username).to.eq('pepe')
        expect(res[1].username).to.eq('tito')
        done()
      })
    })
  })

  describe('#add', function () {
    it('adds a new user', function(done) {
      UserModel.getAll(function(err, res) {
        var qty = res.length;

        UserModel.add({ username: 'tato',password: '1234' }, function(err, res) {
          expect(err).to.not.exist;
          expect(res.insertId).to.exist;
        
          UserModel.getAll(function(err, res) {
            expect(res.length).to.equal(qty + 1);
            done()
          });
        })
      });      
    })

    it('does not add a new user with an existing username', function(done) {
      UserModel.getAll(function(err, res) {
        var qty = res.length;

        UserModel.add({ username: 'pepe',password: '1234' }, function(err, res) {
          expect(err).to.exist;
          //expect(res.insertId).to.not.exist;
        
          UserModel.getAll(function(err, res) {
            expect(res.length).to.equal(qty);
            done()
          });
        })
      });      
    })

    it('does not add a new user without an username', function(done) {
      UserModel.getAll(function(err, res) {
        var qty = res.length;

        UserModel.add({ username: null,password: '1234' }, function(err, res) {
          expect(err).to.exist;          
        
          UserModel.getAll(function(err, res) {
            expect(res.length).to.equal(qty);
            done()
          });
        })
      });      
    })

    it('does not add a new user without a password', function(done) {
      UserModel.getAll(function(err, res) {
        var qty = res.length;

        UserModel.add({ username: "lolo",password: null }, function(err, res) {
          expect(err).to.exist;          
        
          UserModel.getAll(function(err, res) {
            expect(res.length).to.equal(qty);
            done()
          });
        })
      });      
    })

  })// end describe '#add'

})// end describe 'Usuario Model'
