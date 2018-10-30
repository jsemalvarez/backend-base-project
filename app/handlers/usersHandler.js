var User = require("../models/user");

function getList(req, res) {
  User.getAll(function(err, result) {
    if (err) {      
      return res.status(500).json({
        message: err
      })
    }
    res.status(200).json(result)
  })
}

module.exports.getList = getList;