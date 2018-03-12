var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('pages/about', { title: 'О нас' });
});

router.get('/studio', function(req, res, next) {
  res.render('pages/studio', { title: 'О нас' });
});

module.exports = router;
