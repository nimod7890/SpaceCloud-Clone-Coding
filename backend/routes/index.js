var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  req.user.then(function(result){
    console.log(result)
  })
  if (!req.user) return res.render("users");
  else {
    return res.render("home")
  }
});

module.exports = router;