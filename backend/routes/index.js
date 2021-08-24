var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if (!req.session) return res.render("users");
  if(req.session.authenticate){
    return res.render("home")
  }
});

module.exports = router;