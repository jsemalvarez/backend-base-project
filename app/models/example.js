var connection = require('../../database')

var Example = function(field1) {
  this.field1 = field1;  
}

Example.getAll = function (cb) {
  connection.query('SELECT field1 FROM example_table', cb)
}

Example.add = function (data, cb) {
  var sqlQuery = `INSERT INTO example_table (field1)
    VALUES ('${data.field1}')`
  connection.query(sqlQuery, cb)
}

module.exports = Example
