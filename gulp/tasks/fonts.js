'use strict';
module.exports = function() {
  $.gulp.task('fonts', function() {
    return $.gulp.src('./source/style/fonts/*.*')
        .pipe($.gulp.dest($.config.root+'/fonts'));
  })
};