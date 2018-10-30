var connection = require('../../database')

var Users = function(usuario) {
  this.username = usuario.username;
  this.password = usuario.password;   
}

Users.getAll = function (cb) {
  connection.query('SELECT username,password  FROM users', cb)
}

Users.add = function (data, cb) {
  var sqlQuery = `INSERT INTO users (username,password) VALUES ('${data.username}','${data.password}')`
  connection.query(sqlQuery, cb)
}

module.exports = Users