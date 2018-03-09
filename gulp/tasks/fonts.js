'use strict';
module.exports = function() {
  $.gulp.task('fonts', function() {
    return $.gulp.src('./public/stylesheets/fonts/*.*')
        .pipe($.gulp.dest($.config.root+'/assets/fonts/'));
  })
};