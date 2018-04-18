// var express = require('express');
// // var exphbs = require('express-handlebars');
// var mongoose = require('mongoose');
// var bodyParser = require('body-parser');
// var app = express();
//
// mongoose.connect('mongodb://localhost/test', {});
//
// var Post = mongoose.model('Post', {
//   date: String,
//   title: String,
//   body: String
// });
//
// var jsonParser = bodyParser.json();
//
// // подключить шаблонизатор
// // app.set('views', './views');
// // app.set('view engine', 'pug');
//
// // описать маршруты
// app.get('/', function(req, res) {
//   res.send('./index')
// });
// app.get('/index', function(req, res) {
//   res.send('./index');
// });
// app.get('/about.html', function(req, res) {
//   res.send('./about.html');
// });
// app.get('/tissue.html', function(req, res) {
//   res.send('./tissue.html');
// });
// app.get('/studio.html', function(req, res) {
//   res.send('./studio.html');
// });
// app.get('/showroom.html', function(req, res) {
//   res.send('./showroom.html');
// });
// app.get('/gallery.html', function(req, res) {
//   res.send('./gallery.html');
// });
//
// app.post('/addItem', jsonParser, function(req, res) {
//   var post = new Post(req.body);
//
//   post.save(function(err) {
//     if (err) {
//       res.send('ошибка');
//     } else {
//       res.send('ok');
//     }
//   });
// });
//
// app.listen(9999, function() {
//   console.log('Example app listening on port 3000!');
// });
