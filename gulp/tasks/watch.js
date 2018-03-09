'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./public/javascripts/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch('./public/stylesheets/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./views/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./public/images/**/*.*', $.gulp.series('copy:image'));
  });
};
