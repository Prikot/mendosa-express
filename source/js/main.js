// var fs = require('fs');
// var http = require('http');
//
// var server = http.createServer(function (req, res) {
//   console.log('поступил запрос', req.url);
//
//   var needFile = '.' + req.url;
//
//   if (!fs.existsSync(needFile)) {
//     needFile = './404.html';
//   }
//
//   var content = fs.readFileSync(needFile, {encoding: 'UTF8'});
//   res.write(content);
//   res.end();
// });
//
// server.listen(9999);