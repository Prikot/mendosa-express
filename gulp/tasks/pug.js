'use strict';
module.exports = function() {
  $.gulp.task('pug', function() {
    return $.gulp.src('./source/template/pages/*.pug')
        .pipe($.gp.pug({ pretty: true }))
        .on('error', $.gp.notify.onError(function(error) {
          return {
            title: 'Pug',
            message:  error.message
          }
        }))
        .pipe($.gulp.dest($.config.root));
  });
};



// module.exports = function() {
//   $.gulp.task('pug', function() {
//     return $.gulp.src('./views/pages/*.pug')
//       .pipe($.gp.pug({
//         // var locals = require('./content.json');/
//         locals: locals,
//         pretty: true}))
//       .on('error', $.gp.notify.onError(function(error) {
//         return {
//           title: 'Pug',
//           message:  error.message
//         }
//        }))
//       .pipe($.gulp.dest($.config.root));
//   });
// };

// var locals = require('./content.json');

