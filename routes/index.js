var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Главная' });
});

router.get('/index', function(req, res, next) {
  res.render('pages/index', { title: 'Главная' });
});

router.get('/about', function(req, res, next) {
  res.render('pages/about', { title: 'О нас' });
});

router.get('/tissue', function(req, res, next) {
  res.render('pages/tissue', { title: 'Ткани' });
});

router.get('/studio', function(req, res, next) {
  res.render('pages/studio', { title: 'Ателье' });
});

router.get('/showroom', function(req, res, next) {
  res.render('pages/showroom', { title: 'Шоурум' });
});

router.get('/gallery', function(req, res, next) {
  res.render('pages/gallery', { title: 'О нас' });
});


module.exports = router;
