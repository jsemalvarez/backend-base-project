var connection = require('../../database')

var User = function(usuario) {
  this.username = usuario.username;
  this.password = usuario.password;   
}

User.getAll = function (cb) {
  connection.query('SELECT username,password  FROM users', cb)
}

User.add = function (data, cb) {

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

module.exports = User