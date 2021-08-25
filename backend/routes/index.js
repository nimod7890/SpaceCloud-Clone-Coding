var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log(req.user)
  if (!req.user) return res.redirect('/users');
  else {
    return res.redirect('/home')
  }
});

module.exports = router;