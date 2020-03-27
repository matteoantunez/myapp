var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bearcat Pride', bearcat: 'Bearcat', oabaab: 'One a Bearcat, Always a Bearcat'});
});

module.exports = router;
