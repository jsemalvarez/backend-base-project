var connection = require('../../database')

var Product = function(product) {
  this.name = product.name;
  this.price = product.price;
  this.last_price = product.last_price;
  this.stock =  product.stock;
}

Product.getAll = function (cb) {
  connection.query('SELECT * FROM products', cb)
}

Product.add = function (product, cb) {
  var sqlQuery = `INSERT INTO products (name, price, last_price, stock)
    VALUES ('${product.name}','${product.price}','${product.last_price}','${product.stock}')`
  connection.query(sqlQuery, cb)
}

module.exports = Product