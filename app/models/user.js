var connection = require('../../database')

var Users = function(usuario) {
  this.username = usuario.username;
  this.password = usuario.password;   
}

Users.getAll = function (cb) {
  connection.query('SELECT username,password  FROM users', cb)
}

Users.add = function (data, cb) {

	if( data.username != null && data.password != null ){
	  var sqlQuery = `INSERT INTO users (username,password) VALUES ('${data.username}','${data.password}')`
	  connection.query(sqlQuery, cb)
	}else if(data.username == null){		
		cb({message: "username can not null"})
	}else if(data.password == null){
		cb({message: "password can not null"})
	}else{
		cb({message: "datos incorrectos"})
	}

}

module.exports = Users