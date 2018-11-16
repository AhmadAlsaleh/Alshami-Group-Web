var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', require('../public/index/translation/arabic'));
});

router.get('/perfum', (req, res, next) => {
  res.render('perfum');
});

module.exports = router;
